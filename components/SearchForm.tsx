'use client';
import React, { ChangeEventHandler, useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl" htmlFor="search-input">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="search icon"
        />
        <Input
          id="search-input"
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </label>
    </form>
  );
};

export default SearchForm;