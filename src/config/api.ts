const API_BASE_URL = "http://localhost:3000";

const API_ENDPOINTS = {
  LOGIN: "/auth/login",
  ACCOUNTS: "/admin/viewAllAccount",
  CREATE_ACCOUNTS: "/admin/registerForUser",
  EDIT_ACCOUNT: "/admin/editUser/",
  FACULTIES: "/admin/viewFaculties",
  DELETE_FACULTIES: "/admin/deleteFaculty/",
  UPDATE_FACULTIES: "/admin/updateFaculty/",
  CREATE_FACULTIES: "/admin/createFaculty",
  ACADEMIC_YEARS: "/admin/viewAcademicYears",
  DELETE_ACADEMIC_YEARS: "/admin/deleteAcademicYear/",
  UPDATE_ACADEMIC_YEARS: "/admin/updateAcademicYear/",
  CREATE_ACADEMIC_YEARS: "/admin/createAcademicYear/",
  VIEW_ADMIN_PROFILE: "/admin/viewProfile/",
  CONTRIBUTIONS: "/user/viewMyContributions/",
  UPLOAD_CONTRIBUTION: "/user/uploadContribution",
  DELETE_CONTRIBUTION: "/user/deleteContribution/",
  VIEW_PROFILE: "/user/viewProfile",
  UPDATE_PROFILE: "/user/editProfile/",
};

export { API_BASE_URL, API_ENDPOINTS };
