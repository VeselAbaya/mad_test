const {ipcRenderer} = require('electron')

const fillSelectField = (select, options, selectIndex) => {
    let selectElem = document.querySelector(`#${select}`)
    selectElem.selectedIndex = selectIndex + 1
    // options element creates after click on select element
    document.querySelector(`#select-box-${select}`).click()
    selectOptions = document.querySelector(`#select-box-${select} .${options}`)
    selectOptions.childNodes[selectIndex + 1].click()
}

ipcRenderer.on('blizzard-form:fill', (event, data) => {
    const urlParams = new URLSearchParams(window.location.search)
    const countryList = document.querySelector('#country-list')
    countryList.selectedIndex = document.querySelector(
      `#country-list option[value='${urlParams.get('country')}']`
    ).index

    document.querySelector('#firstName').value = data.firstName
    document.querySelector('#lastName').value = data.lastName
    document.querySelector('#dobDay').value = data.birthDay

    fillSelectField('dobMonth', 'overview', data.birthMonthIndex)

    document.querySelector('#dobYear').value = data.birthYear
    document.querySelector('#emailAddress').value = data.email
    document.querySelector('#password').value = data.password

    fillSelectField('question1', 'options', data.questionIndex)

    document.querySelector('#answer1').value = data.answer
    if (data.mailing)
        document.querySelector('#receiveNewsSpecialOffersThirdParty').click()
})
