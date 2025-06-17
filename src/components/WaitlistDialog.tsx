"use client";

import { useState } from "react";
import { useWaitlist } from "@/contexts/WaitlistContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { submitWaitlist } from "@/lib/supabase/waitlist";

export function WaitlistDialog() {
  const { isOpen, closeDialog } = useWaitlist();
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("5");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitWaitlist({
        email,
        rating: parseInt(rating),
        role: role || "other",
      });

      toast.success("Successfully joined the waitlist!");
      closeDialog();
      setEmail("");
      setRating("5");
      setRole("");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="w-[90%] max-w-[360px] mx-auto p-2.5 sm:p-4">
        <DialogHeader className="space-y-1 sm:space-y-2 px-1">
          <DialogTitle className="text-base sm:text-xl text-center">
            Almost there! One quick question:
          </DialogTitle>
          <DialogDescription className="text-[11px] sm:text-sm text-center">
            How excited are you to never debug paper implementations again?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4 px-1">
          <div className="space-y-1.5 sm:space-y-2">
            <RadioGroup
              value={rating}
              onValueChange={setRating}
              className="flex justify-between items-center py-1 sm:py-2 gap-0.5 sm:gap-1"
            >
              <span className="text-lg sm:text-xl">😴</span>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="flex flex-col items-center gap-0.5 sm:gap-1">
                  <RadioGroupItem
                    value={value.toString()}
                    id={`rating-${value}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`rating-${value}`}
                    className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-2 border-primary/20 text-[10px] sm:text-xs font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    {value}
                  </Label>
                </div>
              ))}
              <span className="text-lg sm:text-xl">🚀</span>
            </RadioGroup>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label className="text-[11px] sm:text-sm">Optional: What&apos;s your role?</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="h-8 sm:h-9 text-xs sm:text-sm px-2 sm:px-3">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phd">PhD Student</SelectItem>
                <SelectItem value="professor">Professor</SelectItem>
                <SelectItem value="engineer">ML Engineer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="email" className="text-[11px] sm:text-sm">Your email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-8 sm:h-9 text-xs sm:text-sm px-2 sm:px-3"
            />
          </div>

          <Button type="submit" className="w-full h-8 sm:h-9 text-xs sm:text-sm px-2 sm:px-3" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Join the Research Revolution!"}
          </Button>

          <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-[8px] sm:text-[10px] text-muted-foreground">
            <span>✓ Free during beta</span>
            <span>•</span>
            <span>✓ No credit card</span>
            <span>•</span>
            <span>✓ Cancel anytime</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 