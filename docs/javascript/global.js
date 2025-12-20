const lenis = new Lenis({
    autoRaf: true,
});


AOS.init({
    once: true,
    duration: 1000
});


// components

const loader = document.getElementById("loader");

loader.innerHTML = `
<div id="siteLoader" class="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <div class="relative w-full h-full flex items-center justify-center overflow-hidden">

            <div class="absolute -top-24 -left-24 w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-emerald-500/20 rounded-full blur-3xl">
            </div>

            <div class="relative flex flex-col items-center gap-6">
                <div class="relative w-24 h-24  flex items-center justify-center">
                    <img src="/docs/assets/images/favicon.png" class="h-7" alt="">
                    <div
                        class="absolute inset-0 rounded-3xl border-2 border-transparent border-l-blue-600 border-b-emerald-500 border-t-blue-600 border-r-emerald-500 animate-spin">
                    </div>
                </div>

                <div class="text-center">
                    <p class="text-lg font-semibold text-slate-900">Opti’ Scan</p>
                    <p class="text-sm text-slate-600 mt-1">Chargement…</p>
                </div>

                <div class="w-56 h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                    <div
                        class="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 animate-loaderBar">
                    </div>
                </div>
            </div>

        </div>
    </div>
`

const MIN_LOADER_TIME = 500;

const startTime = Date.now();

function hideLoader() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

    setTimeout(() => {
        loader.classList.add("opacity-0", "pointer-events-none");
        loader.style.transition = "opacity 450ms ease";
        setTimeout(() => loader.remove(), 500);
    }, remaining);
}

window.addEventListener("load", hideLoader);

