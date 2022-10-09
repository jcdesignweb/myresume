import './content.css'

export const ContentWrapper = (page: any) => {
    console.log("page", page)
    return (
        <div className="content">
            
            <div>{page.children}</div>

        </div>
    )
}