const PhraseIndicator = (props) => {
    const phrase = [
        'Nous avons besoin de quelques informations',
        'Dis nous en plus sur ton profil',
        'Nous avons besoin de connaître tes besoins physiologiques',
        'Nous avons besoin de tes disponibilités pour le plan',
        'Nous avons besoin de tes envies pour contruire ton plan',
        "Dernier virage avant l'arrivée",
        'Sprint final !',
    ]

    return <p className="has-text-centered fade-in-top">{phrase[props.slide]}</p>
}

export default PhraseIndicator
