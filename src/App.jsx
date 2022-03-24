import logo from './assets/logo.svg'
// TODO: Config router

const App = () => {
    return (
        <div className="bg-gradient-to-b from-purple-trainpreddict-500 to-deep-blue-500 flex flex-col justify-center items-center w-screen h-screen">
            <img
                src={logo}
                className="w-70 h-70 animate-[spin_10s_linear_infinite]"
                alt="TrainPreddict Logo"
            />
            <h1 className="text-xl font-bold text-red-trainpreddict-500">
                TRAINPREDDICT
            </h1>
            <h2 className="text-lg font-bold text-white-trainpreddict-500">
                APPLICATION POUR CYCLISTES
            </h2>

            <div className="flex justify-between items-center">
                <div className="m-5 px-10 py-2 cursor-pointer bg-red-trainpreddict-500 rounded-lg hover:bg-red-trainpreddict-600 text-white transition">
                    Connexion
                </div>

                <div className="m-5 px-10 py-2 cursor-pointer bg-white-trainpreddict-500 rounded-lg hover:bg-white-trainpreddict-600 text-deep-blue-500 transition">
                    Inscription
                </div>
            </div>
        </div>
    )
}

export default App
