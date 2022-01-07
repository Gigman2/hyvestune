export interface IComponentContext {
    isOpen: boolean
    onClose(): void
    data: any
    modal: string
    handleModalClick(item: string, data?: unknown): void
}

export interface IModalContext {

}