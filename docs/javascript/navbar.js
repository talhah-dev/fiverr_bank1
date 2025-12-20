const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <nav class="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white border-b border-zinc-300">
    <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:px-5 px-3 md:h-20 h-16">
      <a href="/index.html" class="flex items-center gap-2">
        <img src="/docs/assets/images/logo.svg" alt="BetrugsExperten Logo">
        <div class="leading-tight">
          <div class="font-semibold text-xl text-sky-900">
            BetrugsExperten.de
          </div>
          <div class="text-xs text-slate-500">
            Professionelle Rechtshilfe bei Betrug
          </div>
        </div>
      </a>

      <div class="md:flex hidden items-center gap-10">
        <ul class="flex items-center text-black/90 gap-8">
          <li>
            <a href="/uber-uns.html"
               class="hover:opacity-80 tracking-wide font-medium text-[15px] transition-all duration-300">
              Über uns
            </a>
          </li>

          <!-- DESKTOP DROPDOWN -->
          <li class="relative group">
            <button
              class="inline-flex py-3 items-center gap-1 tracking-wide font-medium text-[15px] hover:opacity-80 transition-all duration-300"
              type="button">
              <span>Betrugsarten</span>
              <i class="fa-solid fa-angle-down text-[11px]"></i>
            </button>

            <div
              class="absolute left-0 w-64 bg-white rounded-xl shadow-lg border border-slate-200 py-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top z-50">
              <a href="/investment-betrug.html"
                 class="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50">
                Investment-Betrug
              </a>
              <a href="/bank-betrug.html"
                 class="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50">
                Bank-Betrug
              </a>
              <a href="/festgeld-betrug.html"
                 class="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50">
                Festgeld-Betrug
              </a>
              <a href="/fakeshop-betrug.html"
                 class="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50">
                Fakeshop-Betrug
              </a>
              <a href="/romance-betrug.html"
                 class="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50">
                Romance Scam
              </a>
            </div>
          </li>

          <li>
            <a href="/index.html#kontakt"
               class="hover:opacity-80 tracking-wide font-medium text-[15px] transition-all duration-300">
              Kontakt
            </a>
          </li>
        </ul>

        <div class="md:flex hidden items-center justify-center">
          <a href="/index.html#kontakt"
             class="transition-all duration-300 bg-[#f59e0b] hover:bg-amber-500 font-medium px-6 py-2.5 rounded-lg text-black/90 text-sm">
            Kostenlose Erstberatung
          </a>
        </div>
      </div>

      <i class="fa-solid mobileMenuBtn text-sky-900 fa-bars md:!hidden text-2xl cursor-pointer mr-1"></i>
    </div>
  </nav>

  <!-- MOBILE SIDEBAR MENU -->
  <div id="mobileMenu"
       class="fixed left-0 top-0 bg-white max-w-full w-0 overflow-hidden h-screen z-50 transition-all duration-500 shadow-xl">
    <div class="flex items-center justify-between p-5 border-b border-zinc-200">
      <span class="font-semibold text-sky-900 text-lg">Menü</span>
      <i class="fa-solid mobileMenuCloseBtn fa-x text-zinc-700 text-xl cursor-pointer"></i>
    </div>

    <div class="p-6">
      <ul class="flex flex-col gap-6 text-zinc-800">
        <li>
          <a href="/uber-uns.html"
             class="hover:text-sky-700 mobileMenuCloseBtns text-nowrap font-medium text-[15px] transition-all duration-300">
            Über uns
          </a>
        </li>

        <!-- MOBILE DROPDOWN (ACCORDION) -->
        <li>
          <button
            type="button"
            class="w-full flex justify-between items-center dropdownMobileBtn">
            <span class="font-medium text-[15px]">Betrugsarten</span>
            <i class="fa-solid fa-angle-down text-sm text-gray-600 transition-transform duration-300"></i>
          </button>
          <div class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out mobileDropdown">
            <ul class="pt-3 pl-4 space-y-3 text-[14px] text-zinc-700">
              <li><a href="/investment-betrug.html" class="hover:text-sky-700 mobileMenuCloseBtns transition">Investment-Betrug</a></li>
              <li><a href="/bank-betrug.html" class="hover:text-sky-700 mobileMenuCloseBtns transition">Bank-Betrug</a></li>
              <li><a href="/festgeld-betrug.html" class="hover:text-sky-700 mobileMenuCloseBtns transition">Festgeld-Betrug</a></li>
              <li><a href="/fakeshop-betrug.html" class="hover:text-sky-700 mobileMenuCloseBtns transition">Fakeshop-Betrug</a></li>
              <li><a href="/romance-betrug.html" class="hover:text-sky-700 mobileMenuCloseBtns transition">Romance Scam</a></li>
            </ul>
          </div>
        </li>

        <li>
          <a href="/index.html#kontakt"
             class="hover:text-sky-700 mobileMenuCloseBtns font-medium text-[15px] transition-all duration-300">
            Kontakt
          </a>
        </li>
      </ul>

      <a href="/index.html#kontakt"
         class="block mobileMenuCloseBtns transition-all duration-300 bg-[#f59e0b] hover:bg-amber-500 font-medium px-6 py-2.5 rounded-lg text-black/90 text-sm mt-6 text-nowrap">
        Kostenlose Erstberatung
      </a>
    </div>
  </div>

  <div class="md:h-20 h-16"></div>
`;

// ====== SIDEBAR OPEN/CLOSE ======
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtns = document.querySelectorAll(".mobileMenuBtn");

// Open menu (hamburger)
mobileMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
  });
});

// Close menu on X icon OR any link inside the mobile menu
const mobileMenuCloseTriggers = document.querySelectorAll(
  ".mobileMenuCloseBtn, #mobileMenu a, .mobileMenuCloseBtns"
);

mobileMenuCloseTriggers.forEach((el) => {
  el.addEventListener("click", () => {
    mobileMenu.style.width = "0";
  });
});

// ====== MOBILE DROPDOWN TOGGLE ======
const mobileDropdownBtns = document.querySelectorAll(".dropdownMobileBtn");

mobileDropdownBtns.forEach((btn) => {
  const icon = btn.querySelector("i");
  const content = btn.nextElementSibling;

  btn.addEventListener("click", () => {
    const isClosed = content.classList.contains("max-h-0");

    if (isClosed) {
      content.classList.remove("max-h-0");
      content.classList.add("max-h-96");
      icon.classList.add("rotate-180");
    } else {
      content.classList.remove("max-h-96");
      content.classList.add("max-h-0");
      icon.classList.remove("rotate-180");
    }
  });
});
