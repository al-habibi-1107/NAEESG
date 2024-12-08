import React, { useState } from "react";
import { Box, Input, Flex, Button, SelectRoot, NativeSelectRoot, NativeSelectField } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

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
      mb={8}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
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
        flex="1"
        p="15px 20px"
      />

      {/* Filters */}
     <Flex gap={4} wrap="wrap" justifyContent="flex-end">
      {/* Category Filter */}
      <NativeSelectRoot
        style={{
          width: "200px",
          position: "relative",
          border: "2px solid var(--primaryColor)", // Border color
          borderRadius: "8px", // Rounded corners
          overflow: "hidden",
        }}
      >
        <NativeSelectField
          style={{
            width: "100%",
            padding: "8px",
            background: "white", // Background color
            color: "var(--primaryColor)", // Text color
            fontSize: "16px",
            border: "none", // Remove inner border
            outline: "none",
          }}
          placeholder="Filter by Category"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCategoryChange(e)}
        >
          <option value="" style={{ color: "gray" }}>
            Filter by Category
          </option>
          {allCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>

      {/* Brand Filter */}
      <NativeSelectRoot
        style={{
          width: "200px",
          position: "relative",
          border: "2px solid var(--primaryColor)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <NativeSelectField
          style={{
            width: "100%",
            padding: "8px",
            background: "white",
            color: "var(--primaryColor)",
            fontSize: "16px",
            border: "none",
            outline: "none",
          }}
          placeholder="Filter by Brand"
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
    </Box>
  );
};

export default SearchBarWithFilters;