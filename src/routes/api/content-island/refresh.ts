import { createFileRoute } from '@tanstack/react-router';
import { contentIslandClient } from '@/lib/content-island';
import { ENV } from '@/lib/env';
import { request } from 'http';

export const Route = createFileRoute('/api/content-island/refresh')({
    server: {
        handlers: {
            POST: async ({request}) => {
                const secret = ENV.REFRESH_SECRET;
                const provider = request.headers.get('x-refresh-secret');
                if (provider !== secret) {
                    return new Response('Unauthorized', { status: 401 });
                }
                const result = await contentIslandClient.refreshSnapshot();
                return Response.json(result);
            }

        }
    }
})