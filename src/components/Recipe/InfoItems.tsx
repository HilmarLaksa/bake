import { formatAmount } from "@/utils/recipeUtils";
import { ClockIcon } from "@radix-ui/react-icons";
import { CakeSliceIcon } from "../icons/CakeSliceIcon";
import { CookingPotIcon } from "../icons/CookingPotIcon";
import { InfoItem } from "./InfoItem";
import { formatDurationType } from "./utils";
import { Duration } from "../../../sanity.types";

interface InfoItemsProps {
  servings: number;
  activeTime: Duration | null;
  totalTime: Duration | null;
}

export const InfoItems = ({
  servings,
  activeTime,
  totalTime,
}: InfoItemsProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-2">
      <InfoItem
        icon={<CakeSliceIcon />}
        label="Antal"
        value={formatAmount(servings, undefined)}
        info="Antal portioner du får."
      />

      {activeTime && (
        <InfoItem
          icon={<CookingPotIcon />}
          label="Aktiv tid"
          value={formatDurationType(activeTime)}
          info="Aktiv tidsforbrug som det tager at lave opskriften."
        />
      )}

      {totalTime && (
        <InfoItem
          icon={<ClockIcon />}
          label="Total tid"
          value={formatDurationType(totalTime)}
          info="Total tidsforbrug fra du starter til retten er færdig."
        />
      )}
    </div>
  );
};
