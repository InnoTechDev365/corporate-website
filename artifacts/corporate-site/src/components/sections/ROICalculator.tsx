import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function ROICalculator() {
  const [employees, setEmployees] = useState(1000);
  const [inefficiencyCost, setInefficiencyCost] = useState(5000);
  const [efficiencyGain, setEfficiencyGain] = useState(15);

  const annualSavings = employees * inefficiencyCost * (efficiencyGain / 100);

  return (
    <div className="bg-card rounded-2xl shadow-xl p-8 border border-border" data-testid="roi-calculator">
      <h3 className="text-2xl font-bold mb-6 text-foreground">ROI Calculator</h3>
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-sm font-medium">Number of Employees</Label>
            <span className="text-sm font-bold">{employees.toLocaleString()}</span>
          </div>
          <Slider
            value={[employees]}
            min={100} max={10000} step={100}
            onValueChange={([val]) => setEmployees(val)}
            data-testid="slider-employees"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-sm font-medium">Inefficiency Cost/Emp ($/yr)</Label>
            <span className="text-sm font-bold">${inefficiencyCost.toLocaleString()}</span>
          </div>
          <Slider
            value={[inefficiencyCost]}
            min={1000} max={20000} step={500}
            onValueChange={([val]) => setInefficiencyCost(val)}
            data-testid="slider-inefficiency"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-sm font-medium">Target Efficiency Gain (%)</Label>
            <span className="text-sm font-bold">{efficiencyGain}%</span>
          </div>
          <Slider
            value={[efficiencyGain]}
            min={5} max={50} step={1}
            onValueChange={([val]) => setEfficiencyGain(val)}
            data-testid="slider-efficiency"
          />
        </div>

        <div className="pt-6 border-t border-border mt-6">
          <p className="text-sm text-muted-foreground mb-2">Estimated Annual Savings</p>
          <motion.div
            key={annualSavings}
            initial={{ scale: 0.95, color: "hsl(var(--primary))" }}
            animate={{ scale: 1, color: "hsl(var(--foreground))" }}
            className="text-4xl md:text-5xl font-bold text-primary tracking-tight"
            data-testid="text-annual-savings"
          >
            ${(annualSavings).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
