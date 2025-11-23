<script lang="ts">
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>Privacy Policy – Skye Hills Neighbors</title>
  <meta
    name="description"
    content="Privacy policy for Skye Hills Neighbors – how we handle your personal information."
  />
</svelte:head>

<div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
  <header class="bg-white border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
            SH
          </div>
          <span class="font-semibold text-base">Skye Hills Neighbors</span>
        </a>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <section class="py-12 px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">Privacy – How your personal info is handled</h1>

        <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-lg my-8">
          <p class="text-slate-900 font-medium mb-2">Your rights</p>
          <p class="text-slate-700">
            You will always be asked to give informed consent. You have the right to be forgotten.
          </p>
          <p class="text-sm text-slate-600 mt-2 italic">
            This site is transaparent and gives you more rights than the law requires. No gibberish.
          </p>
        </div>
        
        <div class="space-y-6 text-slate-700">
          <div>
            <h2 class="text-xl font-semibold text-slate-900 mb-2">Where is your info stored?</h2>
            <p>On Mailchimp - it's a third party application that helps us send emails to multiple people at once. They store your info on U.S. servers. The Mailchimp account belongs to Simply Apply Limited - Steve's software company incorporated in Delaware and operating out of Las Vegas, Nevada. This information is compartmentalized from other information that the company uses for its business operations (company account is being used for convenience).</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900 mb-2">Who's got access?</h2>
            <p>Steve and his staff, all of whom are properly identified with signed NDAs, are the only ones with access to the data.</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900 mb-2">What data is stored?</h2>
            <p>Your email address, name, address, and any other information you provide when you sign the petition. That's it.</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900 mb-2">How is your data used?</h2>
            <p>To send you emails about the petition and for analysis related to the petition, HOA or the community (i.e. we may plot the addresses on a map). We may also use your info to contact you about other things related to Skye Hills or local issues, like community events or other local initiatives now or in the future. We will never sell your info to anyone. We may provide a full list of petition signers' (names and addresses) to the HOA or management company.</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold text-slate-900 mb-2">How to remove?</h2>
            <p>Just hit unsubscribe on any email you receive from us. Or ask Steve to remove your info.</p>
          </div>
        </div>

        <div class="mt-8">
          <a href="/" class="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </a>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>

