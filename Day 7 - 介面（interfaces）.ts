/*
在 TypeScript 中，interface 主要用於：

在 TypeScript 的 interface 中，可選屬性是如何表示的？
A. 使用前綴符號 ?
TypeScript 的 interface 可以用於哪種情況？
B. 管理複雜的資料結構
*/

// 定義 Patient 病患介面
interface Patient {
  name: string;
  age: number;
  gender: string;
  medicalRecordNumber: string;
}

// 定義 Appointment 預約介面
interface Appointment {
  date: string;
  time: string;
  doctorName: string;
  patientMedicalRecordNumber: string;
}

// 病患資料陣列
let patients: Patient[] = [];

// 預約資料陣列
let appointments: Appointment[] = [];

// 實作函式 addPatient
function addPatient(patient: Patient): void {
  patients.push(patient);
}

// 實作函式 scheduleAppointment
function scheduleAppointment(appointment: Appointment): void {
  // 確保病患存在
  const patientExists = patients.some(
    (patient) =>
      patient.medicalRecordNumber === appointment.patientMedicalRecordNumber
  );

  if (!patientExists) {
    throw new Error("病患不存在，要確欸");
  }

  // TODO: 增加一筆預約到預約列表
  appointments.push(appointment);
}

// TODO: 函式 cancelAppointment
function cancelAppointment(appointment: Appointment): void {
  appointments = appointments.filter(
    (i) =>
      i.patientMedicalRecordNumber !== appointment.patientMedicalRecordNumber
  );
}

// TODO: 實作函式 listAppointments
function listAppointments(patientMedicalRecordNumber: string): Appointment[] {
  return (appointments = appointments.filter(
    (i) => i.patientMedicalRecordNumber === patientMedicalRecordNumber
  ));
}

// 增加病患
addPatient({
  name: "John Doe",
  age: 30,
  gender: "Male",
  medicalRecordNumber: "12345",
});

// 安排預約
scheduleAppointment({
  date: "2024-01-15",
  time: "10:00",
  doctorName: "Dr. Smith",
  patientMedicalRecordNumber: "12345",
});
