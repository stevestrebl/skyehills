import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import mailchimp from '@mailchimp/mailchimp_marketing';

const LIST_ID = '0d6d2e67e7';

mailchimp.setConfig({
	apiKey: env.MAILCHIMP_API_KEY || 'YOUR_API_KEY',
	server: env.MAILCHIMP_SERVER || 'YOUR_SERVER_PREFIX'
});

export const GET: RequestHandler = async () => {
	try {
		const response = await mailchimp.lists.getList(LIST_ID);
		const memberCount = response.stats?.member_count || 0;
		
		return json({ count: memberCount });
	} catch (error) {
		console.error('Error fetching Mailchimp count:', error);
		// Return a default count on error so the page still works
		return json({ count: 0 });
	}
};

