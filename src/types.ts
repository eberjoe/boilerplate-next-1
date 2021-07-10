export enum SupportChannel {
  HARDWARE,
  NETWORK,
  SOFTWARE
}

export type Location = {
  cityName: string;
  countryName: string;
  timezone: string;
};

export type SupportTicket = {
  location: string;
  start: string;
  end: string;
  type: SupportChannel;
  phone: string;
};

export const Locations: Record<string, Location> = {
  BERLIN: {
    cityName: 'Berlim',
    countryName: 'Alemanha',
    timezone: 'Europe/Berlin'
  },
  BOMBAY: {
    cityName: 'Bombaim',
    countryName: 'Índia',
    timezone: 'Asia/Kolkata'
  },
  BOSTON: {
    cityName: 'Bostom',
    countryName: 'EUA',
    timezone: 'America/New_York'
  },
  CHICAGO: {
    cityName: 'Chicago',
    countryName: 'EUA',
    timezone: 'America/Chicago'
  },
  SAO_PAULO: {
    cityName: 'São Paulo',
    countryName: 'Brasil',
    timezone: 'America/Sao_Paulo'
  },
  RIO: {
    cityName: 'Rio de Janeiro',
    countryName: 'Brasil',
    timezone: 'America/Sao_Paulo'
  },
  MANCHESTER: {
    cityName: 'Manchester',
    countryName: 'Reino Unido',
    timezone: 'Europe/London'
  }
};
