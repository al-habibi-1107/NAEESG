import React from "react";
import {
    Box,
    Heading,
    Table,
  } from "@chakra-ui/react";

import { Variant } from "../models/product";

interface Column {
  key: keyof Variant | string; // Key to access data
  label: string; // Column header label
  isFromVariant: boolean; // Whether the data comes from the Variant class
}

interface DynamicTableProps {
  columns: Column[]; // Column definitions
  variants: Variant[]; // List of variants
  referenceNumbers?: string[]; // List of reference numbers (optional)
  title?: string; // Optional table title
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  columns,
  variants,
  referenceNumbers = [],
}) => {
  return (
    <Box mt={8}>
        <Heading size="md" mb={6} textAlign="center" color="var(--primaryColor)">
        Variants
        </Heading>
        <Box overflowX="auto">
            <Table.Root variant="outline" size="md" colorScheme="gray">
                <Table.Header bg="var(--primaryColor)">
                <Table.Row>
                    {columns.map((col)=>(
                        <Table.ColumnHeader key={col.key} color="white" textAlign="center">{col.label}</Table.ColumnHeader>
                    ))}
                </Table.Row>
                </Table.Header>
                <Table.Body>
                {variants.map((variant, index) => (
                    <Table.Row 
                    key={index}
                    _hover={{
                        bg: "var(--backgroundColor)", // Row hover effect
                        color: "gray.800",
                    }}
                    textAlign="center"
                    color="var(--primaryColor)"
                    >
                    {columns.map((col)=>(
                        <Table.Cell key={col.key} textAlign="center" >
                        {col.isFromVariant
                      ? (variant[col.key as keyof Variant] as string)  || "N/A" // Access data from Variant
                      : referenceNumbers[index] || "N/A"} 
                        </Table.Cell >
                    ))}
                    </Table.Row>
                ))}
                </Table.Body>
            </Table.Root>
        </Box>
    </Box>);
    }

    export default DynamicTable;