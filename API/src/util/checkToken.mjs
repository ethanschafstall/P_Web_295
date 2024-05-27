const checkToken = (authorizationHeader) => {
    let tokenCookie = ''

    const allCookies = authorizationHeader.split(';')

    allCookies.forEach((cookie) => {
      if(cookie.startsWith(' token')){
        tokenCookie = cookie
      }
    })

    const token = tokenCookie.split('=')[1]

    return token
}

export default checkToken