import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Star, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { terminals, Terminal } from "@/data/terminals";

interface TerminalComparisonProps {
  initialSelection?: string[];
}

const TerminalComparison = ({ initialSelection = [] }: TerminalComparisonProps) => {
  const [selectedTerminals, setSelectedTerminals] = useState<string[]>(
    initialSelection.length > 0 ? initialSelection : ["houston", "cushing", "long-beach"]
  );

  const toggleTerminal = (terminalId: string) => {
    if (selectedTerminals.includes(terminalId)) {
      if (selectedTerminals.length > 2) {
        setSelectedTerminals(selectedTerminals.filter((id) => id !== terminalId));
      }
    } else if (selectedTerminals.length < 4) {
      setSelectedTerminals([...selectedTerminals, terminalId]);
    }
  };

  const selectedData = selectedTerminals
    .map((id) => terminals.find((t) => t.id === id))
    .filter(Boolean) as Terminal[];

  // Find highest values for highlighting
  const getCapacityValue = (capacity: string) => parseInt(capacity.replace(/[^0-9]/g, ""));
  const getTanksValue = (tanks: string) => parseInt(tanks.replace(/[^0-9]/g, ""));

  const maxCapacity = Math.max(...selectedData.map((t) => getCapacityValue(t.storageCapacity)));
  const maxTanks = Math.max(...selectedData.map((t) => getTanksValue(t.storageTanks)));

  return (
    <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
      {/* Header */}
      <div className="bg-secondary p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-2xl text-secondary-foreground">Terminal Comparison Tool</h3>
            <p className="text-secondary-foreground/70 text-sm">
              Compare up to 4 terminals side-by-side
            </p>
          </div>
        </div>

        {/* Terminal Selection */}
        <div className="flex flex-wrap gap-2">
          {terminals.map((terminal) => (
            <label
              key={terminal.id}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                selectedTerminals.includes(terminal.id)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20"
              } ${selectedTerminals.length >= 4 && !selectedTerminals.includes(terminal.id) ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <Checkbox
                checked={selectedTerminals.includes(terminal.id)}
                onCheckedChange={() => toggleTerminal(terminal.id)}
                disabled={selectedTerminals.length >= 4 && !selectedTerminals.includes(terminal.id)}
                className="border-current"
              />
              <span className="text-sm font-medium">{terminal.name.replace(" Terminal", "").replace(" (HQ)", "")}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-display text-lg bg-muted min-w-[150px]">Metric</th>
              {selectedData.map((terminal) => (
                <th key={terminal.id} className="p-4 text-center min-w-[200px]">
                  <div className="font-display text-lg mb-1">{terminal.name.replace(" Terminal", "")}</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    {terminal.city}, {terminal.state}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Storage Capacity */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Storage Capacity</td>
              {selectedData.map((terminal) => {
                const isMax = getCapacityValue(terminal.storageCapacity) === maxCapacity;
                return (
                  <td key={terminal.id} className="p-4 text-center">
                    <span className={`text-lg font-semibold ${isMax ? "text-primary" : ""}`}>
                      {terminal.storageCapacity}
                    </span>
                    {isMax && <Star className="inline-block w-4 h-4 text-primary ml-1 fill-primary" />}
                  </td>
                );
              })}
            </tr>

            {/* Storage Tanks */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Storage Tanks</td>
              {selectedData.map((terminal) => {
                const isMax = getTanksValue(terminal.storageTanks) === maxTanks;
                return (
                  <td key={terminal.id} className="p-4 text-center">
                    <span className={`text-lg font-semibold ${isMax ? "text-primary" : ""}`}>
                      {terminal.storageTanks}
                    </span>
                    {isMax && <Star className="inline-block w-4 h-4 text-primary ml-1 fill-primary" />}
                  </td>
                );
              })}
            </tr>

            {/* Access Modes */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Access Modes</td>
              {selectedData.map((terminal) => (
                <td key={terminal.id} className="p-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {terminal.accessModes.split(", ").map((mode) => (
                      <Badge key={mode} variant="secondary" className="text-xs">
                        {mode.replace(" & ", "/")}
                      </Badge>
                    ))}
                  </div>
                </td>
              ))}
            </tr>

            {/* Deep Sea Access */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Deep Sea Access</td>
              {selectedData.map((terminal) => {
                const hasDeepSea = terminal.accessModes.includes("Deep Sea");
                return (
                  <td key={terminal.id} className="p-4 text-center">
                    {hasDeepSea ? (
                      <Check className="w-6 h-6 text-accent mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Pipeline Access */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Pipeline Access</td>
              {selectedData.map((terminal) => {
                const hasPipeline = terminal.accessModes.includes("Pipeline");
                return (
                  <td key={terminal.id} className="p-4 text-center">
                    {hasPipeline ? (
                      <Check className="w-6 h-6 text-accent mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Rail Access */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Rail Access</td>
              {selectedData.map((terminal) => {
                const hasRail = terminal.accessModes.includes("Rail");
                return (
                  <td key={terminal.id} className="p-4 text-center">
                    {hasRail ? (
                      <Check className="w-6 h-6 text-accent mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-muted-foreground/40 mx-auto" />
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Products Handled */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Products Handled</td>
              {selectedData.map((terminal) => (
                <td key={terminal.id} className="p-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {terminal.products.slice(0, 4).map((product) => (
                      <Badge key={product} variant="outline" className="text-xs">
                        {product}
                      </Badge>
                    ))}
                    {terminal.products.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{terminal.products.length - 4} more
                      </Badge>
                    )}
                  </div>
                </td>
              ))}
            </tr>

            {/* Certifications */}
            <tr className="border-b hover:bg-muted/50">
              <td className="p-4 font-medium">Certifications</td>
              {selectedData.map((terminal) => (
                <td key={terminal.id} className="p-4 text-center">
                  <span className="text-lg font-semibold">{terminal.certifications}</span>
                  <span className="text-muted-foreground ml-1">certifications</span>
                </td>
              ))}
            </tr>

            {/* Actions */}
            <tr className="bg-muted/30">
              <td className="p-4 font-medium">View Details</td>
              {selectedData.map((terminal) => (
                <td key={terminal.id} className="p-4 text-center">
                  <Button asChild size="sm">
                    <Link to={`/terminals/${terminal.slug}`}>
                      View Terminal
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="p-4 bg-muted/50 border-t flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary fill-primary" />
          <span className="text-muted-foreground">Highest in category</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">Feature available</span>
        </div>
        <div className="flex items-center gap-2">
          <X className="w-4 h-4 text-muted-foreground/40" />
          <span className="text-muted-foreground">Not available</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalComparison;