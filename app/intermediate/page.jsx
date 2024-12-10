"use client";

import React from "react";
import {
  MantineProvider,
  Container,
  Text,
  Grid,
  TextInput,
  Select,
  FileInput,
  Button,
  GridCol
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const FormPage = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="xl" py="xl">
        {/* Form Header */}
        <Text style={{ fontSize: "32px", fontWeight: 700 }}>
          Tell us more about your business
        </Text>
        <Text color="dimmed" mt={50}>
          Your info is crucial for keeping things running, impressing stakeholders, and
          ensuring top-notch service!
        </Text>

        {/* Form Grid */}
        <Grid gutter="xl">
          <GridCol span={6}>
            <TextInput
              label="Legal Name "
              placeholder="Enter legal name"
              required
            />
         
            <TextInput
              label="Doing Business As "
              placeholder="Enter DBA name"
              required
            />
          
            <TextInput
              label="Company Registration Number "
              placeholder="Enter registration number"
              required
            />
         
            <TextInput
              label="Website URL "
              placeholder="Website URL "
              required
            />
        
            <TextInput
              label="One Random Dropdown? "
              placeholder="options"
              required
            />
          </GridCol>
          <GridCol span={6}>
            <Select
              label="Industry Name "
              placeholder="Select an industry"
              data={[
                { value: "industry-a", label: "Industry A" },
                { value: "industry-b", label: "Industry B" },
                { value: "industry-c", label: "Industry C" },
              ]}
              required
              rightSection={<IconChevronDown size={18} />}
            />
            <Select
              label="Which dropdown would you like to select? "
              placeholder="Options"
              data={[
                { value: "industry-a", label: "Industry A" },
                { value: "industry-b", label: "Industry B" },
                { value: "industry-c", label: "Industry C" },
              ]}
              required
              rightSection={<IconChevronDown size={18} />}
            />
   
            <FileInput
              label="Certification of Incorporation "
              placeholder="Click to upload"
              required
              accept="image/*,application/pdf"
            />
         
          
            <FileInput
              label="Company Logo "
              placeholder="Click to upload"
              required
              accept="image/*"
            />
          </GridCol>
        </Grid>

        {/* Navigation Buttons */}
        <Grid mt="xl">
          <GridCol span={6} mt={20}>
            <Button variant="filled" fullWidth color="red">
              Previous
            </Button>
          </GridCol>
          <GridCol span={6} mt={20}>
            <Button fullWidth color="red">
              Next
            </Button>
          </GridCol>
        </Grid>
      </Container>
    </MantineProvider>
  );
};

export default FormPage;
