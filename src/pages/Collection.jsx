import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilters, setShowFilters] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }


    setFilteredProducts(productsCopy)
  }


  const sortProduct = (e) => {
    let fpCopy = filteredProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => (a.price - b.price)))

        break
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break
      default:
        applyFilters()
        break
    }
  }

  useEffect(() => {
    applyFilters()
  }, [category, subCategory, search, showSearch])


  useEffect(() => {
    sortProduct()
  }, [sortType])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ""}`} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>


      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL '} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">sort by: relavent</option>
            <option value="low-high">sort by: low to high</option>
            <option value="high-low">sort by: high to low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection