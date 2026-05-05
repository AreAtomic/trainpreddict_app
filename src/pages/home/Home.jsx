import logo from '../../assets/logo_rectangulaire_rose.svg'
import fond1 from '../../assets/fond-1.png'
import fond2 from '../../assets/fond-2.png'
import fond3 from '../../assets/fond-3.png'
import fond4 from '../../assets/fond-4.png'
import fond1Mobile from '../../assets/fond-1-mobile.png'
import fond2Mobile from '../../assets/fond-2-mobile.png'
import fond3Mobile from '../../assets/fond-3-mobile.png'
import fond4Mobile from '../../assets/fond-4-mobile.png'
import user from '../../assets/user.svg'
import suivi from '../../assets/area-chart-alt.svg'
import objectif from '../../assets/trophy-red.svg'
import calendar from '../../assets/calendar.svg'
import suiviAnalyse from '../../assets/SuiviAnalyse.png'
import { HeadingTwo } from '../../components/atoms'

const NAV = [
    { href: '#plan-personnalise', label: 'Plan personnalisé' },
    { href: '#suivi-analyse', label: 'Suivi et analyse' },
    { href: '#objectifs', label: 'Vos objectifs' },
    { href: '#communaute', label: 'La communauté' },
    { href: '#coachs', label: 'Le projet' },
]

const fontDisplay = "font-['Chakra_Petch',sans-serif]"
const fontBody = "font-['IBM_Plex_Sans',sans-serif]"

const HeroBackdrop = ({ desktop, mobile, alt }) => (
    <>
        <img
            src={desktop}
            alt={alt}
            className="absolute inset-0 hidden object-cover w-full h-full md:block"
            loading="eager"
        />
        <img
            src={mobile}
            alt=""
            className="absolute inset-0 object-cover w-full h-full md:hidden"
            aria-hidden
            loading="eager"
        />
    </>
)

const FeatureCard = ({ icon, title }) => (
    <div
        className={`group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-component-two-500/90 px-6 py-9 text-center shadow-[0_24px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:border-medium-contrast-500/30 hover:shadow-[0_28px_56px_-16px_rgba(0,0,0,0.55)] md:min-h-[11rem] ${fontBody}`}
    >
        <img
            src={icon}
            alt=""
            className="w-12 h-12 mb-4 transition duration-300 opacity-95 group-hover:scale-110 motion-reduce:transform-none"
            aria-hidden
        />
        <HeadingTwo
            color="text-high-contrast-500"
            className="!text-xl md:!text-2xl"
        >
            {title}
        </HeadingTwo>
    </div>
)

const Lead = ({ children, className = '' }) => (
    <p
        className={`text-xl font-semibold leading-snug text-medium-contrast-500 md:text-2xl md:leading-relaxed ${fontBody} ${className}`}
    >
        {children}
    </p>
)

const Body = ({ children, className = '' }) => (
    <p
        className={`text-lg leading-relaxed text-low-contrast-500 md:text-[1.35rem] md:leading-[1.65] ${fontBody} ${className}`}
    >
        {children}
    </p>
)

const SectionTitle = ({ children, as: Tag = 'h2', className = '' }) => (
    <Tag
        className={`${fontDisplay} text-[clamp(1.75rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] ${className}`}
    >
        {children}
    </Tag>
)

/** Icône « rejoindre » : arcs de trajectoire + flèche (vectoriel, currentColor) */
const HeroJoinIcon = ({ className = 'h-8 w-8' }) => (
    <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 text-white ${className}`}
        aria-hidden
    >
        <path
            d="M5 17.5a11.5 11.5 0 0 1 17.2-9.8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.38"
        />
        <path
            d="M7.5 18.5a9 9 0 0 1 13.6-7.6"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            opacity="0.55"
        />
        <path
            d="M11.5 16.25H21"
            stroke="currentColor"
            strokeWidth="2.15"
            strokeLinecap="round"
        />
        <path
            d="M17.75 11.5L22.75 16.25 17.75 21"
            stroke="currentColor"
            strokeWidth="2.15"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="9" cy="11" r="1.35" fill="currentColor" opacity="0.65" />
    </svg>
)

const PrimaryCta = ({ href, icon, iconElement, children, className = '' }) => (
    <a
        href={href}
        className={`group inline-flex h-16 min-w-[min(100%,17.5rem)] items-center justify-center gap-3 rounded-lg bg-high-contrast-500 px-6 text-lg font-semibold text-white shadow-lg transition hover:bg-high-contrast-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-high-contrast-300 motion-reduce:transition-none md:h-20 md:text-xl ${fontBody} ${className}`}
    >
        {iconElement ? (
            <span className="flex shrink-0 items-center justify-center motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5">
                {iconElement}
            </span>
        ) : icon ? (
            <img src={icon} alt="" className="w-8 h-8 shrink-0" aria-hidden />
        ) : null}
        {children}
    </a>
)

const GhostCta = ({ href, children, className = '' }) => (
    <a
        href={href}
        className={`inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-base font-medium text-white backdrop-blur-sm transition hover:border-medium-contrast-500/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-contrast-400 ${fontBody} ${className}`}
    >
        {children}
    </a>
)

const ImageStrip = ({ desktop, mobile, alt }) => (
    <div className="relative min-h-[min(52vh,520px)] w-full md:min-h-[min(70vh,720px)]">
        <HeroBackdrop desktop={desktop} mobile={mobile} alt={alt} />
        <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary-blue-500/55 via-primary-blue-500/25 to-primary-blue-500/80"
            aria-hidden
        />
    </div>
)

const Home = () => {
    return (
        <div
            className={`min-h-screen w-full bg-primary-blue-500 text-white ${fontBody} antialiased`}
        >
            <style>{`
        @keyframes home-fade-up {
          from { opacity: 0; transform: translate3d(0, 16px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .home-animate {
          opacity: 0;
          animation: home-fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-animate { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

            {/* ——— Hero ——— */}
            <header
                id="accueil"
                className="relative min-h-[min(62vh,34rem)] overflow-hidden md:min-h-[min(56vh,36rem)]"
            >
                <HeroBackdrop
                    desktop={fond1}
                    mobile={fond1Mobile}
                    alt="Cyclistes jour de courses"
                />
                <div
                    className="absolute inset-0 z-[1] bg-primary-blue-500/[0.72]"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(224,26,79,0.12),transparent)]"
                    aria-hidden
                />

                <nav
                    className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-10 lg:px-12"
                    aria-label="Principale"
                >
                    <a href="#accueil" className="shrink-0">
                        <img
                            src={logo}
                            alt="TrainPreddict, application pour cyclistes"
                            className="w-auto h-10 md:h-12"
                        />
                    </a>
                    <ul className="flex-wrap items-center justify-center hidden gap-x-6 gap-y-2 lg:flex xl:gap-x-10">
                        {NAV.map((item, i) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`${fontBody} text-sm font-medium text-white/85 transition hover:text-medium-contrast-500 focus-visible:rounded focus-visible:text-medium-contrast-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-medium-contrast-500`}
                                    style={{ animationDelay: `${i * 50}ms` }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 pb-8 pt-8 md:px-10 md:pb-10 md:pt-9 lg:px-12 lg:pt-4">
                    <div
                        className="max-w-4xl home-animate"
                        style={{ animationDelay: '0.1s' }}
                    >
                        <p
                            className={`${fontDisplay} mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-medium-contrast-500`}
                        >
                            TrainPreddict
                        </p>
                        <h1
                            className={`${fontDisplay} text-[clamp(1.85rem,5.5vw,3.75rem)] font-bold leading-[1.05] text-white`}
                        >
                            Une application sur mesure pour tous les cyclistes
                        </h1>
                        <div
                            className="home-animate mt-8 flex w-full max-w-xl flex-col gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4"
                            style={{ animationDelay: '0.18s' }}
                        >
                            <GhostCta
                                href="/auth"
                                className="!h-14 w-full min-h-[3.5rem] !min-w-0 justify-center !py-0 text-base font-semibold sm:w-auto sm:!min-w-[11.5rem]"
                            >
                                Connectez-vous
                            </GhostCta>
                            <PrimaryCta
                                href="/auth"
                                iconElement={<HeroJoinIcon className="h-7 w-7" />}
                                className="!h-14 w-full min-h-[3.5rem] !min-w-0 justify-center gap-2.5 !px-5 text-base !leading-none sm:w-auto sm:!min-w-[11.5rem] md:!text-base"
                            >
                                Rejoignez-nous
                            </PrimaryCta>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-12 md:grid-cols-3 md:gap-6 md:px-10 lg:px-12">
                    <div
                        className="home-animate"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <FeatureCard icon={user} title="Plan personnalisé" />
                    </div>
                    <div
                        className="home-animate"
                        style={{ animationDelay: '0.28s' }}
                    >
                        <FeatureCard icon={suivi} title="Suivi & Analyse" />
                    </div>
                    <div
                        className="home-animate"
                        style={{ animationDelay: '0.36s' }}
                    >
                        <FeatureCard icon={objectif} title="Vos objectifs" />
                    </div>
                </div>
            </header>

            {/* ——— Plan personnalisé ——— */}
            <section
                id="plan-personnalise"
                className="relative overflow-hidden"
            >
                <div className="relative z-10 max-w-3xl px-5 py-16 mx-auto space-y-8 md:px-10 md:py-20 lg:px-12">
                    <Lead>
                        Votre profil, votre emploie du temps, votre plan sur
                        mesure.
                    </Lead>
                    <Body>
                        Chaque cyclistes est différents, pour pouvoir
                        s&apos;adapter à vous, notre application récolte les
                        données sur votre profil et votre emploie du temps.
                        Ensuite les données sont compilés pour vous générer un
                        plan d&apos;entrainement 100% personnalisé.
                    </Body>
                </div>
                <div className="relative min-h-[min(88vh,900px)]">
                    <HeroBackdrop
                        desktop={fond2}
                        mobile={fond2Mobile}
                        alt="Cyclistes jour de courses"
                    />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary-blue-500/85 via-primary-blue-500/45 to-transparent md:to-primary-blue-500/20" />
                    <div className="relative z-10 grid gap-10 px-5 py-16 mx-auto max-w-7xl md:grid-cols-2 md:items-start md:gap-12 md:px-10 md:py-24 lg:px-12">
                        <div className="max-w-xl pt-4 home-animate md:pt-12">
                            <SectionTitle>
                                Plan d&apos;entrainement
                                <br />
                                100% personnalisé
                            </SectionTitle>
                        </div>
                        <div className="relative flex justify-center w-full max-w-md mx-auto md:mx-0 md:max-w-none md:justify-end">
                            <div className="home-animate relative z-10 flex size-[min(44vw,12.5rem)] items-center justify-center rounded-3xl border border-white/10 bg-component-two-500/35 p-6 shadow-[0_32px_64px_rgba(0,0,0,0.45)] backdrop-blur-sm md:size-[min(15rem,22vw)] md:p-8">
                                <img
                                    src={calendar}
                                    alt="Plan personnalisé pour cycliste par TrainPreddict"
                                    className="h-full w-full max-h-[9rem] object-contain md:max-h-[11rem]"
                                    width={96}
                                    height={96}
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ——— Suivi & Analyse ——— */}
            <section
                id="suivi-analyse"
                className="relative px-5 py-16 overflow-hidden bg-component-two-500 md:px-10 md:py-24 lg:px-12"
            >
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                    aria-hidden
                />
                <div className="relative mx-auto max-w-7xl">
                    <div className="max-w-4xl mb-12 home-animate">
                        <SectionTitle>Suivi &amp; Analyse</SectionTitle>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <Lead>
                            Parce que nous savons que les entrainements ne se
                            passe jamais comme prévu
                        </Lead>
                        <Body>
                            L&apos;application est faites spécialement pour
                            s&apos;adapter aux imprévu et vous proposer un suivi
                            100% personnalisé. Grâce à nos analyses, nous
                            pouvons adapter votre plan d&apos;entrainement au
                            fur et à mesure pour que celui-ci reste le plus
                            efficace possible.
                        </Body>
                    </div>
                </div>
            </section>

            {/* ——— Objectifs ——— */}
            <section id="objectifs" className="relative overflow-hidden">
                <div className="relative min-h-[min(88vh,900px)]">
                    <img
                        src={fond3}
                        alt="Cyclistes jour de courses"
                        className="absolute inset-0 hidden object-cover w-full h-full lg:block"
                    />
                    <img
                        src={fond3Mobile}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full lg:hidden"
                        aria-hidden
                    />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary-blue-500/90 via-primary-blue-500/55 to-primary-blue-500/85" />
                    <div className="relative z-10 grid gap-10 px-5 py-16 mx-auto max-w-7xl md:grid-cols-2 md:items-center md:gap-12 md:px-10 md:py-24 lg:px-12">
                        <div className="order-2 max-w-xl home-animate md:order-1 md:pt-8">
                            <SectionTitle>
                                Atteignez 100% de
                                <br />
                                votre potentiel
                            </SectionTitle>
                        </div>
                        <div className="relative flex justify-center order-1 md:order-2 md:justify-end">
                            <img
                                src={suiviAnalyse}
                                alt="Analyse et suivi personnalisé par TrainPreddict"
                                className="home-animate relative z-10 w-[min(92vw,420px)] max-w-md drop-shadow-[0_28px_56px_rgba(0,0,0,0.45)] lg:w-[min(28vw,380px)]"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative z-10 max-w-3xl px-5 py-16 mx-auto space-y-8 md:px-10 md:py-20 lg:px-12">
                    <Lead>
                        Vous avez le potentiel d&apos;atteindre vos objectifs.
                    </Lead>
                    <Body>
                        Pour que vous ayez toutes les chances d&apos;atteindre
                        vos objectifs, nous nous adoptons à votre rythme et au
                        rythme de vous imprévu. Vous allez arrivé à 100% le jour
                        de vos objectifs.
                    </Body>
                </div>
            </section>

            {/* ——— Communauté ——— */}
            <section
                id="communaute"
                className="relative px-5 py-16 overflow-hidden bg-component-two-500 md:px-10 md:py-24 lg:px-12"
            >
                <div className="relative mx-auto max-w-7xl">
                    <div className="flex flex-col gap-8 mb-10 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-3xl home-animate">
                            <SectionTitle>
                                Une application faites
                                <br />
                                par les cyclistes
                            </SectionTitle>
                        </div>
                        <div className="home-animate shrink-0 lg:pt-4">
                            <PrimaryCta
                                href="https://forms.gle/HeF6KSbSw8Aag4Kv8"
                                className="w-full sm:w-auto"
                            >
                                Répondre au questionnaire
                            </PrimaryCta>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <Lead>Nous avons besoins de vous.</Lead>
                        <Body>
                            Dans l&apos;optique d&apos;atteindre notre objectif
                            de rendre l&apos;application à votre image nous
                            avons besoin de vous. Notre projet est fait pour les
                            cyclistes et par cyclistes, nous avons besoin de
                            votre aide tant par vos retours d&apos;utilisation
                            de l&apos;application que par vos envies. C&apos;est
                            pour cela que nous avons mis à votre disposition un{' '}
                            <a
                                href="https://forms.gle/HeF6KSbSw8Aag4Kv8"
                                className="font-semibold underline transition text-medium-contrast-500 decoration-high-contrast-500/60 underline-offset-4 hover:text-high-contrast-400 hover:decoration-high-contrast-400 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medium-contrast-400"
                            >
                                questionnaire
                            </a>
                            .
                        </Body>
                    </div>
                </div>
            </section>

            {/* ——— Coachs & clubs ——— */}
            <section id="coachs" className="relative overflow-hidden">
                <ImageStrip
                    desktop={fond4}
                    mobile={fond4Mobile}
                    alt="Cyclistes jour de courses"
                />
                <div className="absolute inset-0 z-[5] flex flex-col justify-center px-5 py-16 md:px-10 lg:px-12">
                    <div className="flex flex-col w-full gap-10 mx-auto max-w-7xl lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl home-animate">
                            <SectionTitle>
                                Pour les coachs &amp;
                                <br />
                                les clubs
                            </SectionTitle>
                        </div>
                        <div className="home-animate shrink-0">
                            <PrimaryCta
                                href="/auth"
                                className="w-full sm:w-auto"
                            >
                                En savoir plus
                            </PrimaryCta>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
