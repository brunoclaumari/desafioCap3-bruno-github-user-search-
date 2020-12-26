export type GitRequest = {
    content:GitResponse
}


export type GitResponse = {
    login:string,
    avatar_url:string,
    public_repos:number,
    followers: number,
    following: number,
    company:string,
    blog:string,
    location: string,
    created_at:string,
    html_url:string,
    message?:string
}

export type ErroReq = {
    message?: string,
    reqReturn: number;
}