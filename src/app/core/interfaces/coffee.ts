export interface Coffee {
    id: number
    uid: string
    blend_name: string
    origin: string
    variety: string
    notes: string
    intensifier: string
    imgId: number // Image id to reference a sample image (addition to api response data)
}
