import { useState } from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { City } from "@/data/cities";

interface CityComboboxProps {
  cities: City[];
  value: string;
  onSelect: (cityId: string) => void;
  placeholder?: string;
  label?: string;
}

const CityCombobox = ({
  cities,
  value,
  onSelect,
  placeholder = "Select city...",
  label,
}: CityComboboxProps) => {
  const [open, setOpen] = useState(false);

  const selectedCity = cities.find((city) => city.id === value);

  return (
    <div>
      {label && <label className="text-sm font-medium mb-2 block">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-10"
          >
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {selectedCity ? (
                <span className="truncate">
                  {selectedCity.name}
                  <span className="text-muted-foreground text-xs ml-2">
                    ({selectedCity.state})
                  </span>
                </span>
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0 z-50" align="start">
          <Command>
            <CommandInput placeholder="Search city or area..." />
            <CommandList>
              <CommandEmpty>No city found.</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.id}
                    value={`${city.name} ${city.state}`}
                    onSelect={() => {
                      onSelect(city.id);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === city.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{city.name}</span>
                      <span className="text-xs text-muted-foreground">{city.state}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CityCombobox;
