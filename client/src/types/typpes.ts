export type postType = {
    _id: string
    title: string
    desc: string
    photo: string
    username: string
    categories: categoryType[]
    createdAt: Date
    updatedAt: Date
    __v: number
}
export type categoryType ={
    _id: string
    name: string
    createdAt: Date
    updatedAt: Date
    __v: number
}
export type userType ={
    _id: string
    username: string
    email: string
    password: string
    profilePic: string
    createdAt: Date
    updatedAt: Date
    __v: number
}

