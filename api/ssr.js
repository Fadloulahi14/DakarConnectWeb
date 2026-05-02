import server from '../dist/server/server.js';

export default async function handler(req, res) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = `${proto}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') headers.set(key, value);
    else if (Array.isArray(value)) headers.set(key, value.join(', '));
  }

  const body =
    req.method !== 'GET' && req.method !== 'HEAD'
      ? await new Promise((resolve) => {
          const chunks = [];
          req.on('data', (c) => chunks.push(c));
          req.on('end', () => resolve(Buffer.concat(chunks)));
        })
      : undefined;

  const request = new Request(url, {
    method: req.method,
    headers,
    body: body?.length ? body : undefined,
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  res.end(Buffer.from(await response.arrayBuffer()));
}
