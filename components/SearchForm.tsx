'use client';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { formUrlQuery } from '@/sanity/utils';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      let newUrl = '';
      if (search) {
        newUrl = formUrlQuery({ params: searchParams.toString(), key: 'query', value: search });
      } else {
        newUrl = formUrlQuery({ params: searchParams.toString(), keysToRemove: ['query'] });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5"
    >
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
