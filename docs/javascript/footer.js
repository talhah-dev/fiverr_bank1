const footer = document.getElementById("footer");

footer.innerHTML = `
    <footer class="bg-[#0b3a57] text-white pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4">
            <div class="">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
                    <div>
                        <h3 class="font-semibold mb-3 md:mb-7 text-xl">BetrugsExperten.de</h3>
                        <p class="text-white/80 leading-relaxed">
                            Ihr Netzwerk aus Rechtsanwälten und internationalen Ermittlern für
                            professionelle Hilfe bei Online-Betrug.
                        </p>
                    </div>

                    <div>
                        <h3 class="font-semibold mb-3 md:mb-7 text-xl">Schnellzugriff</h3>
                        <ul class="space-y-3 text-white/80">
                            <li><a href="/index.html" class="hover:underline">Startseite</a></li>
                            <li><a href="/uber-uns.html" class="hover:underline">Über uns</a></li>
                            <li><a href="/index.html#kontakt" class="hover:underline">Kontakt</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold mb-3 md:mb-7 text-xl">Betrugsarten</h3>
                        <ul class="space-y-3 text-white/80">
                            <li><a href="/investment-betrug.html" class="hover:underline">Investment-Betrug</a></li>
                            <li><a href="/bank-betrug.html" class="hover:underline">Bank-Betrug</a></li>
                            <li><a href="/festgeld-betrug.html" class="hover:underline">Festgeld Betrug</a></li>
                            <li><a href="/fakeshop-betrug.html" class="hover:underline">Fakeshop-Betrug</a></li>
                            <li><a href="/romance-betrug.html" class="hover:underline">Romance Scam</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold mb-3 md:mb-7 text-xl">Kontakt</h3>
                        <ul class="space-y-3 text-white/80">
                            <li class="flex items-center space-x-2">
                                <i class="fa-regular fa-envelope text-sm"></i>
                                <span>info@BetrugsExperten.de</span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <i class="fa-solid fa-phone text-sm"></i>
                                <span>+49 89 248833139</span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <i class="fa-solid fa-location-dot text-sm"></i>
                                <span>Deutschland</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="border-t border-slate-600 md:text-start text-center mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-white/80 space-y-3 md:space-y-0">
                    <p>© 2010 - 2025 BetrugsExperten.de Alle Rechte vorbehalten.</p>

                    <div class="flex items-center text-sm space-x-6 my-4 md:my-0">
                        <a href="/impressum.html" class="hover:underline">Impressum</a>
                        <a href="/datenschutz.html" class="hover:underline">Datenschutz</a>
                    </div>
                </div>

                <p class="mt-4 text-[11px] text-slate-300/80 md:text-start text-center">
                    Haftungsausschluss: Die Informationen auf dieser Website stellen keine Rechtsberatung dar. Für eine
                    individuelle Beratung kontaktieren Sie uns bitte direkt.
                </p>
            </div>
        </div>
    </footer>
`