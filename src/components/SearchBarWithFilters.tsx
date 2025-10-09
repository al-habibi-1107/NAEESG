import React, { useState } from "react";
import { Box, Input, Flex, Select } from "@chakra-ui/react";


interface SearchBarWithFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: { categoryId?: number; brandId?: number }) => void;
  allCategories: { id: number; title: string }[];
  allBrands: { id: number; name: string }[];
}

const SearchBarWithFilters: React.FC<SearchBarWithFiltersProps> = ({
  onSearch,
  onFilterChange,
  allCategories,
  allBrands,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
  const [selectedBrand, setSelectedBrand] = useState<number | undefined>();

  // Handle search input changes
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    onSearch(query); // Notify parent component
  };

  // Handle category filter changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const n = parseInt(e.target.value, 10);
    const categoryId = Number.isNaN(n) ? undefined : n;
    setSelectedCategory(categoryId);
    onFilterChange({ categoryId, brandId: selectedBrand }); // Notify parent component
  };

  // Handle brand filter changes
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const n = parseInt(e.target.value, 10);
    const brandId = Number.isNaN(n) ? undefined : n;
    setSelectedBrand(brandId);
    onFilterChange({ categoryId: selectedCategory, brandId }); // Notify parent component
  };

  return (
    <Box
     mb={8} width="100%"
    >
      <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "stretch", md: "center" }}
      gap={4}
      >

     
        {/* Search Bar */}
        <Input
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleSearchInputChange}
          border="1px solid"
          borderColor="var(--primaryColor)"
          borderRadius="4px"
          color="var(--primaryColor)"
          size="md"
          flex={{ base: "1 0 100%", md: "1 0 60%" }} 
          p="15px 20px"
        />

        {/* Filters */}
      <Flex 
      gap={4}
      flexWrap="wrap"
      flex={{ base: "1 0 100%", md: "1 0 40%" }}
      >
        {/* Category Filter */}
        <Select
          size="sm"
          borderRadius="full"
          flex={{ base: "1 0 48%", md: "1 0 20%" }}
          bg="var(--primaryColor)"
          color="white"
          paddingLeft="12px"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCategoryChange(e)}
          value={selectedCategory ?? ""}
        >
          <option value="" style={{ backgroundColor: "var(--primaryColor)", color: "white" }}>
            Filter by Category
          </option>
          {allCategories.map((category) => {
            const extractValueInParentheses = (input: string): string | null => {
              const match = input.match(/\(([^)]+)\)/);
              return match ? match[1] : input;
            };
            return (
              <option
                key={category.id}
                value={category.id}
                style={{ backgroundColor: "var(--primaryColor)", color: "white" }}
              >
                {extractValueInParentheses(category.title)}
              </option>
            );
          })}
        </Select>

        {/* Brand Filter */}
        <Select
          size="sm"
          borderRadius="full"
          flex={{ base: "1 0 48%", md: "1 0 20%" }}
          bg="var(--primaryColor)"
          color="white"
          paddingLeft="12px"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleBrandChange(e)}
          value={selectedBrand ?? ""}
        >
          <option value="" style={{ backgroundColor: "var(--primaryColor)", color: "white" }}>
            Filter by Brand
          </option>
          {allBrands.map((brand) => (
            <option
              key={brand.id}
              value={brand.id}
              style={{ backgroundColor: "var(--primaryColor)", color: "white" }}
            >
              {brand.name}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
    </Box>
  );
};

export default SearchBarWithFilters;