<script lang="ts">
  let imageModalOpen = $state(false);
  // TODO: Replace with actual count from your backend/database
  let neighborCount = $state(42);

  function openImageModal() {
    imageModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeImageModal() {
    imageModalOpen = false;
    document.body.style.overflow = '';
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && imageModalOpen) {
      closeImageModal();
    }
  }

  function handleModalKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeImageModal();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Skye Hills Neighbors</title>
  <meta
    name="description"
    content="Skye Hills Neighbors – a calm, practical voice for homeowners in Skye Hills."
  />
</svelte:head>

<div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
  <header class="bg-white border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
          SH
        </div>
        <span class="font-semibold text-base">Skye Hills Neighbors</span>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <!-- Hero -->
    <section class="bg-gradient-to-b from-emerald-50 to-slate-50 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 py-10 md:py-10">
        <h1 class="text-3xl md:text-4xl font-bold mb-3">
          Do you need to drill into the wall?
        </h1>
        
        <!-- Intro text and image side by side on desktop, stacked on mobile -->
        <div class="flex flex-col md:flex-row gap-6 mb-3 items-start">
          <p class="text-base text-slate-700 flex-1 md:max-w-lg">
            Unfortunately, under the current design guidelines, it's not allowed, even if it's in your backyard. This means you can't have a wall mounted trellis. We petitioned the Board to change the guidelines, so what you see on the picture becomes possible:
          </p>
          
          <!-- Image - smaller, aligned right on desktop, clickable to enlarge -->
          <div class="w-full md:w-auto md:shrink-0">
            <button
              type="button"
              onclick={openImageModal}
              class="block relative group w-full"
            >
              <img
                src="/wall-trellis.jpeg"
                alt="Wall mounted trellis example - click to enlarge"
                class="w-full max-w-[280px] mx-auto md:mx-0 md:w-64 rounded-lg shadow-md border border-slate-200 transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg cursor-pointer"
              />
              <div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors duration-200">
                <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <!-- Proposal Link - right under the paragraph/image section -->
        <div class="max-w-2xl mx-auto text-center md:text-left">
          <a
            href="https://docs.google.com/document/d/1UVLoxvLzVknKMQ9ejxQrhaXfGrv2vULIoKHw1Jjlt8s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-white border-2 border-emerald-600 text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-emerald-50 hover:shadow-md transition-all duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Read the full proposal
          </a>
        </div>
      </div>
    </section>

    <!-- Join -->
    <section class="py-8 px-4 bg-white border-y border-slate-200">
      <div class="max-w-4xl mx-auto">
        <div class="text-center">
          <h2 class="text-2xl font-semibold mb-3">Support the petition</h2>
          
          
          <p class="text-slate-700 mb-3">
            We need your help to get this proposal on the agenda and passed. Please sign the petition below.
          </p>

          <div class="mt-4 max-w-md mx-auto bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <!-- TODO: Replace this with your Mailchimp embed form -->
            <!-- Go to Mailchimp → Audience → Signup forms → Embedded forms,
                 then paste the generated <form> code here. -->
            <form
              action="YOUR_MAILCHIMP_POST_URL_HERE"
              method="post"
              target="_blank"
              novalidate
              class="flex flex-col gap-3"
            >
              <label class="text-sm font-medium text-slate-900 flex flex-col gap-1">
                Email address
                <input
                  type="email"
                  name="EMAIL"
                  required
                  placeholder="you@example.com"
                  class="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20"
                />
              </label>
              <!-- Mailchimp may require hidden fields; include them from their embed code -->
              <button
                type="submit"
                class="self-start border-none rounded-lg px-4 py-2 bg-emerald-600 text-white text-sm font-medium cursor-pointer hover:bg-emerald-700 transition-colors"
              >
                Join the petition
              </button>
            </form>
          </div>

          <!-- Neighbor Counter -->
          <div class="mt-6 inline-block">
            <div class="bg-emerald-50 border-2 border-emerald-600 rounded-lg px-6 py-3 shadow-sm">
              <div class="text-3xl font-bold text-emerald-700 mb-1">{neighborCount}</div>
              <div class="text-sm text-emerald-600 font-medium">
                {neighborCount === 1 ? 'neighbor' : 'neighbors'} already support this
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Timeline and About -->
    <section class="py-8 px-4 bg-white border-y border-slate-200">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <!-- Timeline - Left side on desktop -->
          <div class="flex-1 lg:order-1">
            <h2 class="text-2xl font-semibold mb-6 text-center lg:text-left">Timeline</h2>
            
            <div class="relative pl-2">
              <!-- Timeline line -->
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>
              
              <div class="space-y-8">
                <!-- Timeline item 1 -->
                <div class="relative pl-10">
                  <div class="absolute left-4 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-md z-10 flex items-center justify-center transform -translate-x-1/2">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-emerald-700 mb-1">September 7, 2025</div>
                    <p class="text-slate-700">
                      Initial inquiry submitted to the management company regarding requirements for a wall-mounted trellis. Management clarified that current guidelines prohibit attachments to perimeter walls.
                    </p>
                  </div>
                </div>

                <!-- Timeline item 2 -->
                <div class="relative pl-10">
                  <div class="absolute left-4 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-md z-10 flex items-center justify-center transform -translate-x-1/2">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-emerald-700 mb-1">September 10, 2025</div>
                    <p class="text-slate-700">
                      After speaking with several neighbors, a written proposal to amend the design guidelines was submitted to the HOA Board via the management company.
                    </p>
                  </div>
                </div>

                <!-- Timeline item 3 -->
                <div class="relative pl-10">
                  <div class="absolute left-4 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-md z-10 flex items-center justify-center transform -translate-x-1/2">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-emerald-700 mb-1">September 16, 2025</div>
                    <p class="text-slate-700">
                      Management company advised that proposals can only be addressed during Open Forum at regularly scheduled Board meetings. A request was submitted to have the proposal placed on the next meeting agenda.
                    </p>
                  </div>
                </div>

                <!-- Timeline item 4 -->
                <div class="relative pl-10">
                  <div class="absolute left-4 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-md z-10 flex items-center justify-center transform -translate-x-1/2">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-emerald-700 mb-1">October 27, 2025</div>
                    <p class="text-slate-700">
                      The proposal was presented during Open Forum at the Board meeting. It was not included on the meeting agenda. No discussion occurred at that time.
                    </p>
                  </div>
                </div>

                <!-- Timeline item 5 -->
                <div class="relative pl-10">
                  <div class="absolute left-4 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-md z-10 flex items-center justify-center transform -translate-x-1/2">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-emerald-700 mb-1">November 21, 2025</div>
                    <p class="text-slate-700">
                      Following a request for an update, management informed that the Board does not currently wish to move the idea forward.
                    </p>
                  </div>
                </div>

                <!-- Timeline item 6 -->
                <div class="relative pl-10">
                  <div class="absolute left-4 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow-md z-10 flex items-center justify-center transform -translate-x-1/2 animate-pulse">
                    <div class="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-emerald-700 mb-1">November 22, 2025</div>
                    <p class="text-slate-700">
                      Petition initiative & website launched to gather homeowner support and demonstrate community interest in the proposed guideline changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About - Right side on desktop -->
          <div class="flex-1 lg:order-2">
            <h2 class="text-2xl font-semibold mb-4 text-center lg:text-left">Who's behind this?</h2>
            
            <!-- Picture -->
            <div class="mb-4 flex justify-center lg:justify-start">
              <img
                src="/steve.jpg"
                alt="Steve, Skye Hills homeowner"
                class="w-48 h-48 rounded-full object-cover border-4 border-emerald-600 shadow-md"
              />
            </div>
            
            <p class="text-slate-700 mb-3">
              This initiative is led by Steve, a Skye Hills homeowner (Tribute), together with a
              growing group of neighbors. We are independent from the HOA and management
              company, but we want to work <em>with</em> them, not against them. This initiative is necessary to show the Board that more than just a few people want this change.
            </p>
          </div>
        </div>
      </div>
    </section>


  </main>

  <footer class="bg-white border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 py-3 flex flex-wrap justify-between gap-2 text-xs text-slate-500">
      <span>Skye Hills Neighbors – homeowner-led and independent.</span>
      <span>This site is not affiliated with the HOA or management company.</span>
    </div>
  </footer>
</div>

<!-- Image Modal/Lightbox -->
{#if imageModalOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onclick={closeImageModal}
    onkeydown={handleModalKeydown}
    role="dialog"
    aria-modal="true"
    aria-label="Enlarged image view"
    tabindex="-1"
  >
    <button
      type="button"
      onclick={(e) => {
        e.stopPropagation();
        closeImageModal();
      }}
      class="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors z-10"
      aria-label="Close image"
    >
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
      role="presentation"
      class="relative max-w-7xl max-h-full"
    >
      <img
        src="/wall-trellis.jpeg"
        alt="Wall mounted trellis example - enlarged view"
        class="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
      />
    </div>
  </div>
{/if}
