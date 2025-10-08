import React from "react";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
        <TableContainer>
          <Table variant="outline" size="md" colorScheme="gray">
            <Thead bg="var(--primaryColor)">
              <Tr>
                {columns.map((col) => (
                  <Th key={col.key} color="white" textAlign="center">
                    {col.label}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {variants.map((variant, index) => (
                <Tr
                  key={index}
                  _hover={{ bg: "var(--backgroundColor)", color: "gray.800" }}
                  color="var(--primaryColor)"
                >
                  {columns.map((col) => (
                    <Td key={col.key} textAlign="center">
                      {col.isFromVariant
                        ? ((variant[col.key as keyof Variant] as unknown as string) || "N/A")
                        : referenceNumbers[index] || "N/A"}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
    </Box>);
    }

    export default DynamicTable;