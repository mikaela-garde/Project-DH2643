export enum Social_Media {
    Instagram,
    Twitter,
    Facebook,
    TikTok
}

enum Experience_Template {
    Timeline,
    Participant
}

enum Post_Type {
    Image,
    Video,
    Audio
}

export type User = {
    id: string,
    email: string,
    first_name: string,
    last_name: string, 
    social_media: {
        platform: Social_Media, 
        url: string}[],
    description: string | null,
    profile_img: string,
    friends: number[], //Ska man lägga in hela användaren här eller vara ett id
    friend_requests: Friend_request[],
    experiences: number[],
    notifications: Notifications[],
    dark_mode: boolean
}

export type Experience = {
    id: number,
    name: string,
    participants: User[],
    start_time: string,
    end_time: string,
    template: Experience_Template,
    posts: Post[]
}

export type Post = {
    id: number,
    time: string,
    content_url: string
    type: Post_Type,
    author: number, //Här kanske hela user objektet
}

export type Friend_request = {
    id: number,
    sender: number,
    receiver: number,
    accpeted: boolean
}

export type Notifications = {
    id: number,
    sender: number,
    invited: number[]
}
