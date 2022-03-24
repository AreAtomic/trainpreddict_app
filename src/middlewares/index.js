import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import * as Actions from '../redux'
dayjs.locale('fr')

/**
 * @description Clear all state to disconnect user
 * @returns {Promise}
 */
export const logout = () => (dispatch) => {
    dispatch(Actions.unregisterUserData())
    dispatch(Actions.logout())
    dispatch(Actions.resetAssistant())
    dispatch(Actions.resetCaracteristics())
    dispatch(Actions.resetDaySelected())
    dispatch(Actions.resetIndicators())
    dispatch(Actions.resetListUser())
    dispatch(Actions.resetNewObjectif())
    dispatch(Actions.resetNewSeance())
    dispatch(Actions.resetObjectif())
    dispatch(Actions.resetPlanning())
    dispatch(Actions.resetSeances())
    dispatch(Actions.resetStatistics())
    dispatch(Actions.resetUserSelected())
    return Promise.resolve()
}

/**
 * @description Register data of user on login
 * @param {toast} toast
 * @param {ObjectId} userId
 * @param {jwt} token
 * @param {string} email
 * @param {string} name
 * @returns
 */
export const login = (userId, token, email, name) => (dispatch) => {
    dispatch(
        Actions.registerUserData({
            userId: userId,
            token: token,
            firstLogged: false,
        })
    )
    dispatch(Actions.login({ email: email, name: name }))
    return Promise.resolve()
}

/**
 * @description Permet de set la liste de coureur
 * @param {array} userList
 * @returns
 */
export const setUserList = (userList) => (dispatch) => {
    dispatch(Actions.setListUser(userList))
    return Promise.resolve()
}

/**
 * @description Permet d'ajouter un utilisateur au planning
 * @param {JSON} user
 * @param {array} races
 * @param {ISOString} date
 * @param {JSON} actualState
 * @returns
 */
export const addUserToPlanning =
    (user, races, date, actualState) => (dispatch) => {
        let year = dayjs(date).year()
        let newDay = dayjs(`01/01/${year}`)
        let planning = []
        let daysOfCourse = 0
        while (newDay.year() === year) {
            let isRace = false
            let race = {}
            races.forEach((race) => {
                if (
                    dayjs(race.date).format('DD/MM/YYYY') ==
                    dayjs(newDay).format('DD/MM/YYYY')
                ) {
                    isRace = true
                    daysOfCourse += 1
                    race = { course: race.titre }
                }
            })
            planning.push(isRace ? race : { course: false })
            newDay = dayjs(newDay).add(1, 'day')
        }

        let users = [...actualState.users]
        let needPush = true
        users.forEach((u) => {
            if (u._id === user._id) {
                u = {
                    _id: user._id,
                    name: `${user.prenom} ${user.nom}`,
                    days: planning,
                    daysOfCourse: daysOfCourse,
                }
                needPush = false
            }
        })
        if (needPush) {
            users.push({
                _id: user._id,
                name: `${user.prenom} ${user.nom}`,
                days: planning,
                daysOfCourse: daysOfCourse,
            })
        }

        dispatch(Actions.setUsersPlanning(users))
        return Promise.resolve()
    }

/**
 * @description Permet d'ajouter les course de l'organisme au planning
 * @param {array} races
 * @param {ISOString} date
 * @returns
 */
export const addRacesToPlanning = (races, date) => (dispatch) => {
    let year = dayjs(date).year()
    let newDay = dayjs(`01/01/${year}`)
    let planning = []
    let daysOfCourse = 0
    while (newDay.year() === year) {
        let isRace = false
        let race = {}
        races.forEach((race) => {
            if (
                dayjs(race.date).format('DD/MM/YYYY') ==
                dayjs(newDay).format('DD/MM/YYYY')
            ) {
                isRace = true
                daysOfCourse += 1
                race = { course: race.titre }
            }
        })
        planning.push(isRace ? race : { course: false })
        newDay = dayjs(newDay).add(1, 'day')
    }

    dispatch(Actions.setRacesPlanning(planning))
    return Promise.resolve()
}
/**
 * @description Permet de changer la date de début du planning
 * @param {ISOString} date
 * @returns
 */
export const changeDatePlanning = (date) => (dispatch) => {
    dispatch(Actions.changeDatePlanning(date))
    return Promise.resolve()
}

export const addRacesToCalendar = (races, date) => (dispatch) => {
    let year = dayjs(date).year()
    let newDay = dayjs(`01/01/${year}`)
    let planning = []
    let week = []
    while (newDay.year() === year) {
        let planned = []
        if (week.length % 7 === 0 && week.length !== 0) {
            planning.push({ days: week })
            week = []
        }
        races.forEach((race) => {
            if (
                dayjs(race.date).format('DD/MM/YYYY') ==
                dayjs(newDay).format('DD/MM/YYYY')
            ) {
                planned.push(year)
            }
        })
        week.push({ date: dayjs(newDay).toISOString(), planned: planned })
        newDay = dayjs(newDay).add(1, 'day')
    }

    dispatch(Actions.changeDataCalendar(planning))
    return Promise.resolve()
}

/**
 * @description Change number of week displayed on calendar
 * @param {int} view
 * @returns
 */
export const changeViewCalendar = (view) => (dispatch) => {
    dispatch(Actions.changeViewCalendar(view))
    return Promise.resolve()
}

/**
 * @description Set user selected
 * @param {string} name
 * @param {ObjectId} id
 * @returns
 */
export const setUserSelected = (name, id) => (dispatch) => {
    dispatch(Actions.setUserSelected({ name: name, id: id }))
    return Promise.resolve()
}

/**
 * @description Set seances list
 * @param {array} seances
 * @returns
 */
export const setSeances = (seances) => (dispatch) => {
    dispatch(Actions.setSeances(seances))
    return Promise.resolve()
}

/**
 * @description Feel calendar datas with coureur calendar
 * @param {array} data
 * @returns
 */
export const changeCalendarData = (data) => (dispatch) => {
    if (data) {
        let index = null
        data.forEach((week, weekIndex) => {
            week.days.forEach((day) => {
                if (index === null && day.date.indexOf('01-01') !== -1) {
                    index = weekIndex
                }
            })
        })
        dispatch(Actions.changeDataCalendar(data))
        dispatch(Actions.changeFirstWeekIndexCalendar(index))
        return Promise.resolve()
    }
    return Promise.resolve()
}

/**
 * @description set datas of indicators on firstload
 * @param {array} data
 * @returns
 */
export const setDatasIndicators = (data) => (dispatch) => {
    let dates = []
    let formPlanned = []
    let tirednessPlanned = []
    let formDone = []
    let tirednessDone = []
    data.forEach((week) => {
        week.days.forEach((day) => {
            dates.push(dayjs(day.date).format('DD/MM/YYYY'))
            formPlanned.push(day.form.planned)
            tirednessPlanned.push(day.tiredness.planned)
            formDone.push(day.form.done)
            tirednessDone.push(day.tiredness.done)
        })
    })
    dispatch(
        Actions.setDatasIndicators({
            dates: dates,
            form: { planned: formPlanned, done: formDone },
            tiredness: { planned: tirednessPlanned, done: tirednessDone },
        })
    )
    return Promise.resolve()
}

/**
 * @description Set selected courbes
 * @param {string} selected
 * @returns
 */
export const setSelectedIndicators = (selected) => (dispatch) => {
    dispatch(Actions.setSelectedIndicators(selected))
    return Promise.resolve()
}

/**
 * @description Met à jour les statistiques
 * @param {array} data
 * @returns
 */
export const setWeeksStatistics = (data) => (dispatch) => {
    let weeks = []
    data.forEach((week) => {
        weeks.push({ ...week.statistiques, dayOne: week.days[0].date })
    })
    dispatch(Actions.setWeeksStatistics(weeks))
    return Promise.resolve()
}

/**
 * @description Met à jour la semaine de statistiques sélectionné
 * @param {setWeekSelected} week
 * @returns
 */
export const setWeekSelected = (week) => (dispatch) => {
    dispatch(Actions.setWeekSelectedStatistics(week))
    return Promise.resolve()
}

/**
 * @description Set objectifs list
 * @param {array} data
 * @returns
 */
export const setObjectifs = (data) => (dispatch) => {
    dispatch(Actions.setObjectif(data))
    return Promise.resolve()
}

/**
 * @description Set user selected profil
 * @param {JSON} data
 * @returns
 */
export const setUserProfil = (data) => (dispatch) => {
    dispatch(
        Actions.setCaracteristics({
            pfs: data.pfs,
            fcfs: data.fcfs,
            poids: data.poids,
            experience: data.experience,
            sommeil: data.heure_sommeil,
            sse: data.sse,
            tempsRecupOptimal: data.temps_recup_max,
            tempsEntrainement: data.nombre_heure_semaine,
            nombreEntrainement: data.nombre_seance_semaine,
            muscu: data.musculation,
            ppg: data.ppg,
            etirement: data.etirement,
            style: data.style,
            pointFaible: data.point_faible,
            joursRepos: data.jours_repos,
            exerciceFoncier: data.foncier,
            age: data.age,
        })
    )
    return Promise.resolve()
}

export const setNewObjectif = (data) => (dispatch) => {
    dispatch(Actions.setNewObjectif(data))
    return Promise.resolve()
}

/**
 * @description Save localy a new comment
 * @param {from: String, value: String} data
 * @returns
 */
export const setNewComment = (data) => (dispatch) => {
    dispatch(Actions.setNewCommentDaySelected(data))
    return Promise.resolve()
}

export const setDayOneCalendar = (data) => (dispatch) => {
    dispatch(Actions.changeDateCalendar(data))
    return Promise.resolve()
}
