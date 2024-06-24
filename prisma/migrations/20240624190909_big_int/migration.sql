/*
  Warnings:

  - You are about to alter the column `phone` on the `Pacient` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pacient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" BIGINT NOT NULL,
    "medicalRecord" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "room" INTEGER NOT NULL,
    "treatment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "diet" TEXT,
    "weight" REAL,
    "height" REAL,
    "caloricNecessity" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Pacient" ("adress", "caloricNecessity", "createdAt", "dateOfBirth", "diet", "gender", "height", "id", "medicalRecord", "name", "phone", "room", "status", "treatment", "updatedAt", "weight") SELECT "adress", "caloricNecessity", "createdAt", "dateOfBirth", "diet", "gender", "height", "id", "medicalRecord", "name", "phone", "room", "status", "treatment", "updatedAt", "weight" FROM "Pacient";
DROP TABLE "Pacient";
ALTER TABLE "new_Pacient" RENAME TO "Pacient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
