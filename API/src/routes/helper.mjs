const success = (message, data) => {
    return {
        message: message,
        data: data
    }
}

const failure = (message, error) => {
    return {
        message: message,
        error: error
    }
}

export { success, failure }