import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClientInfo } from './types';

interface BookingClientFormProps {
  clientInfo: ClientInfo;
  onClientInfoChange: (info: ClientInfo) => void;
  errors?: Partial<Record<keyof ClientInfo, string>>;
}

const BookingClientForm = ({
  clientInfo,
  onClientInfoChange,
  errors = {}
}: BookingClientFormProps) => {
  const handleChange = (field: keyof ClientInfo, value: string) => {
    onClientInfoChange({
      ...clientInfo,
      [field]: value
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-base font-semibold text-foreground">
        Vos informations
      </h3>

      <div className="space-y-3">
        {/* Row 1: First name & Last name */}
        <div className="grid grid-cols-2 gap-3">
          {/* First name */}
          <div className="space-y-1.5">
            <Label htmlFor="firstName" className="font-body text-sm font-medium">
              Prénom <span className="text-accent">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Prénom"
              value={clientInfo.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={errors.firstName ? 'border-destructive' : ''}
            />
            {errors.firstName && (
              <p className="text-xs text-destructive">{errors.firstName}</p>
            )}
          </div>

          {/* Last name */}
          <div className="space-y-1.5">
            <Label htmlFor="lastName" className="font-body text-sm font-medium">
              Nom <span className="text-accent">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Nom"
              value={clientInfo.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={errors.lastName ? 'border-destructive' : ''}
            />
            {errors.lastName && (
              <p className="text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email - full width */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="font-body text-sm font-medium">
            Email <span className="text-accent">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            value={clientInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        {/* Phone - full width */}
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="font-body text-sm font-medium">
            Téléphone <span className="text-accent">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="06 12 34 56 78"
            value={clientInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={errors.phone ? 'border-destructive' : ''}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingClientForm;
