import { useState } from "react"

const Search = () => {
    const [keyword, setKeyword] = useState("")

    const handleSearch = async () => {
        console.log("Đang tìm kiếm " + keyword);
    }

    return (
        <>
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tìm kiếm sản phẩm</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center">
                            <div className="input-group w-75 mx-auto d-flex">
                                <input
                                    type="search"
                                    className="form-control p-3"
                                    placeholder="Nhập tên sản phẩm, phụ kiện..."
                                    aria-describedby="search-icon-1"
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                                <span id="search-icon-1" className="input-group-text p-3" onClick={handleSearch}>
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search