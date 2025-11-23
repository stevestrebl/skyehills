<script lang="ts">
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <title>Thank You – Skye Hills Neighbors</title>
  <meta
    name="description"
    content="Thank you for signing the petition to support the design guidelines proposal."
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
    <section class="py-16 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <div class="mb-6">
          <div class="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Thank you for signing the petition!
        </h1>
        
        <p class="text-lg text-slate-700 mb-6">
          Your support helps demonstrate to the Board that homeowners want this change to the design guidelines.
        </p>
        
        <p class="text-base text-slate-600 mb-8">
          We'll keep you updated on the progress of this proposal. You'll receive emails when there are important developments or opportunities to voice your support.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            class="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
          >
            Back to home
          </a>
          <a
            href="https://docs.google.com/document/d/1UVLoxvLzVknKMQ9ejxQrhaXfGrv2vULIoKHw1Jjlt8s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-emerald-50 transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Read the full proposal
          </a>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</div>

