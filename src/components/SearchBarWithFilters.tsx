import React, { useState } from "react";
import { Box, Input, Flex, NativeSelectRoot, NativeSelectField } from "@chakra-ui/react";


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
    const categoryId = parseInt(e.target.value) || undefined;
    setSelectedCategory(categoryId);
    onFilterChange({ categoryId, brandId: selectedBrand }); // Notify parent component
  };

  // Handle brand filter changes
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brandId = parseInt(e.target.value) || undefined;
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
        <NativeSelectRoot
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          size="sm"
          borderRadius="full"
          flex={{ base: "1 0 48%", md: "1 0 20%" }}
          backgroundColor="var(--primaryColor)"
          textAlign="center"
        >
          <NativeSelectField
          textAlign="center"
          paddingLeft="12px"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCategoryChange(e)}
          >
            <option value="" style={{ color: "gray" }}>
              Filter by Category
            </option>
            {allCategories.map((category) => {
                const extractValueInParentheses = (input: string): string | null => {
                  const match = input.match(/\(([^)]+)\)/); // Regex to extract value in parentheses
                  return match ? match[1] : input;
            };
            
            return (
              <option key={category.id} value={category.id}>
              {extractValueInParentheses(category.title)}
              </option>
            );
          })}
          </NativeSelectField>
        </NativeSelectRoot>

        {/* Brand Filter */}
        <NativeSelectRoot
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          size="sm"
          borderRadius="full"
          flex={{ base: "1 0 48%", md: "1 0 20%" }}
          backgroundColor="var(--primaryColor)"
          textAlign="center"
        >
          <NativeSelectField
           textAlign="center"
            paddingLeft="12px"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleBrandChange(e)}
          >
            <option value="" style={{ color: "gray" }}>
              Filter by Brand
            </option>
            {allBrands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </NativeSelectField>
        </NativeSelectRoot>
      </Flex>
    </Flex>
    </Box>
  );
};

export default SearchBarWithFilters;