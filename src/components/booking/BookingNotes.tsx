import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface BookingNotesProps {
  notes: string;
  onNotesChange: (notes: string) => void;
  maxLength?: number;
}

const BookingNotes = ({
  notes,
  onNotesChange,
  maxLength = 500
}: BookingNotesProps) => {
  const handleChange = (value: string) => {
    if (value.length <= maxLength) {
      onNotesChange(value);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <Label htmlFor="notes" className="font-heading text-base font-semibold text-foreground">
          Note <span className="font-normal text-muted-foreground">(optionnel)</span>
        </Label>
        <span className="font-body text-xs text-muted-foreground">
          {notes.length}/{maxLength}
        </span>
      </div>

      <Textarea
        id="notes"
        placeholder="Un message à nous transmettre ? (allergies, préférences, demandes spéciales...)"
        value={notes}
        onChange={(e) => handleChange(e.target.value)}
        className="min-h-[100px] resize-none"
      />
    </div>
  );
};

export default BookingNotes;
