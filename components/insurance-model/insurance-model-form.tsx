"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { handleRequest } from "@/model/Insurance/mutation";
import { GENDER, REGION, Schema, schema } from "@/types/Insurance";
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SelectContent } from "@radix-ui/react-select";
import Link from "next/link";

export const InsuranceModelForm = ({
  genders,
  regions,
}: {
  genders: GENDER;
  regions: REGION;
}) => {
  const [price, setPrice] = useState<number>(0);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Schema) => {
    // console.log(data);
    const response = await handleRequest(data);
    setPrice(response.price);
  };
  return (
    <div className="mt-3">
      <div className="text-2xl font-medium italic text-center">
        Insurance Price: {price}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              {...form.register("age", { valueAsNumber: true })}
              type="number"
              placeholder="Age"
              id="age"
            />
          </div>
          <div>
            <Label htmlFor="bmi">Bmi</Label>
            <Input
              {...form.register("bmi", { valueAsNumber: true })}
              placeholder="Enter bmi"
              id="bmi"
              type="number"
            />
          </div>
          <div>
            <Label htmlFor="children">Children</Label>
            <Input
              {...form.register("children", { valueAsNumber: true })}
              placeholder="Enter children"
              id="children"
              type="number"
            />
          </div>
          <div>
            <Label htmlFor="smoker">Smoker</Label>
            <Input
              {...form.register("smoker", { valueAsNumber: true })}
              placeholder="Enter smoker"
              id="smoker"
              type="number"
            />
            <FormDescription>
              if not smoker: input 1, if smoker input:0
            </FormDescription>
          </div>

          <div>
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border w-full bg-black text-white">
                      {genders.gender.map((gender) => (
                        <SelectItem
                          key={gender}
                          value={gender}
                          className="cursor-pointer"
                        >
                          {gender}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border w-full bg-black text-white">
                      {regions.locations.map((location) => (
                        <SelectItem
                          key={location}
                          value={location}
                          className="cursor-pointer"
                        >
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    your location has tremendous effect on your insurance price
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <Input type="submit" /> */}
          <Button type="submit">Determine Insurance</Button>
        </form>
      </Form>
    </div>
  );
};
