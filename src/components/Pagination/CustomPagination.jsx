import { useMemo } from "react"
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2"
import { useEffect } from "react"
import useWindowWidth from "../../custom-hooks/useWindowWidth"

const Elipsis = () => {
  return (
    <>
      <div className="pagination-elipsis">
        <span>...</span>
      </div>
    </>
  )
}

const PaginationBtn = (props) => {
  const { children, active = false, ...otherProps } = props
  return (
    <>
      <button
        className={`pagination-btn ${active ? "pagination-btn--active" : ""}`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  )
}

const generatePaginationBtns = (currentPage, totalPages, setCurrentPage) => {
  if (totalPages <= 8) {
    return (
      <>
        {Array.from({ length: totalPages }).map((_, index) => {
          return (
            <PaginationBtn
              onClick={() => setCurrentPage(index + 1)}
              active={currentPage === index + 1}
              key={index}
            >
              {index + 1}
            </PaginationBtn>
          )
        })}
      </>
    )
  }

  if (currentPage <= 3) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <PaginationBtn
              onClick={() => setCurrentPage(index + 1)}
              active={currentPage === index + 1}
              key={index}
            >
              {index + 1}
            </PaginationBtn>
          )
        })}
        <Elipsis />
        <PaginationBtn onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </PaginationBtn>
      </>
    )
  }
  if (currentPage >= 4 && currentPage <= totalPages - 3) {
    return (
      <>
        <PaginationBtn onClick={() => setCurrentPage(1)}>1</PaginationBtn>
        <Elipsis />
        <PaginationBtn onClick={() => setCurrentPage(currentPage - 1)}>
          {currentPage - 1}
        </PaginationBtn>
        <PaginationBtn active onClick={() => setCurrentPage(currentPage)}>
          {currentPage}
        </PaginationBtn>
        <PaginationBtn onClick={() => setCurrentPage(currentPage + 1)}>
          {currentPage + 1}
        </PaginationBtn>
        <Elipsis />
        <PaginationBtn onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </PaginationBtn>
      </>
    )
  }

  if (currentPage >= totalPages - 2) {
    return (
      <>
        <PaginationBtn onClick={() => setCurrentPage(1)}>1</PaginationBtn>
        <Elipsis />
        {Array.from({ length: 3 })
          .map((_, index) => {
            return (
              <PaginationBtn
                onClick={() => setCurrentPage(totalPages - index - 1)}
                active={currentPage === totalPages - index - 1}
                key={index}
              >
                {totalPages - index - 1}
              </PaginationBtn>
            )
          })
          .reverse()}
        <PaginationBtn
          onClick={() => setCurrentPage(totalPages)}
          active={currentPage === totalPages}
        >
          {totalPages}
        </PaginationBtn>
      </>
    )
  }
}

const CustomPagination = (props) => {
  const { currentPage, perPage, totalVacancies, setCurrentPage } = props

  const windowWidth = useWindowWidth()

  const totalPages = useMemo(() => {
    return Math.ceil(totalVacancies / perPage)
  }, [totalVacancies, perPage])

  useEffect(() => {
    if (currentPage !== 1) {
      const currentUrl = window.location.href
      const url = new URL(currentUrl)
      url.searchParams.set("page", currentPage)
      const updatedUrl = url.toString()
      window.history.replaceState(null, "", updatedUrl)
    }
  }, [currentPage])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  if (totalPages === 1) return <></>

  if (windowWidth > 500) {
    return (
      <>
        <div className="pagination-wrapper">
          {currentPage !== 1 && (
            <>
              <button
                className="pagination-arrow"
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                <HiArrowSmallLeft />
              </button>
            </>
          )}
          {!(currentPage !== 1) && (
            <>
              <div />
            </>
          )}

          <div className="pagination">
            {generatePaginationBtns(currentPage, totalPages, setCurrentPage)}
          </div>

          {currentPage !== totalPages && (
            <>
              <button
                className="pagination-arrow"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                <HiArrowSmallRight />
              </button>
            </>
          )}
        </div>
      </>
    )
  }
  if (windowWidth <= 500) {
    return (
      <>
        <div className="pagination-wrapper">
          <div className="pagination">
            {generatePaginationBtns(currentPage, totalPages, setCurrentPage)}
          </div>
          <div className="pagination-arrows__wrapper">
            {currentPage !== 1 && (
              <>
                <button
                  className="pagination-arrow"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <HiArrowSmallLeft />
                </button>
              </>
            )}
            {!(currentPage !== 1) && (
              <>
                <div />
              </>
            )}
            {currentPage !== totalPages && (
              <>
                <button
                  className="pagination-arrow"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  <HiArrowSmallRight />
                </button>
              </>
            )}{" "}
          </div>
        </div>
      </>
    )
  }
}

export default CustomPagination
