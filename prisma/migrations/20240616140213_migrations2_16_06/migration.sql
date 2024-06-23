-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pacient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "medicalRecord" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Pacient" ("adress", "createdAt", "dateOfBirth", "gender", "id", "medicalRecord", "name", "phone", "room", "status", "treatment", "updatedAt") SELECT "adress", "createdAt", "dateOfBirth", "gender", "id", "medicalRecord", "name", "phone", "room", "status", "treatment", "updatedAt" FROM "Pacient";
DROP TABLE "Pacient";
ALTER TABLE "new_Pacient" RENAME TO "Pacient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
