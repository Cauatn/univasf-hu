export type PageProps = {
  params: {
    id: string;
  };
};

export type PacientProps = {
  id: string;
  name: string;
  dateOfBirth: Date;
  gender: string;
  phone: bigint;
  medicalRecord: string;
  adress: string;
  room: number;
  treatment: string;
  status: string;
  diet: string | null;
  weight: number | null;
  height: number | null;
  caloricNecessity: number | null;
  createdAt: Date;
  updatedAt: Date;
};
