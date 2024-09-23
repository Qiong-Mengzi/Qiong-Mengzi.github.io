var DataIO = window.jsnamespace || {}

DataIO.FetchJSON = (
    async function (url) {
        const response = fetch(url)
        if(response.ok)
            throw new Error('Failed to Fetch Resource '+(await response).status+' '+(await response).statusText)
        return (await response).json()
    }
)

DataIO.FetchText = (
    async function (url){
        const response = fetch(url)
        if(response.ok)
            throw new Error('Failed to Fetch Resource '+(await response).status+' '+(await response).statusText)
        return (await response).text()
    }
)
