import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Toggle Sidebar
  const toggleSidebarBtn = document.getElementById("toggle-sidebar")
  const sidebar = document.querySelector(".sidebar")

  toggleSidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")
  })

  // Navigation
  const navItems = document.querySelectorAll(".sidebar-menu li")
  const pages = document.querySelectorAll(".page")

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      navItems.forEach((navItem) => navItem.classList.remove("active"))

      // Add active class to clicked item
      this.classList.add("active")

      // Show corresponding page
      const pageId = this.getAttribute("data-page")
      pages.forEach((page) => {
        if (page.id === pageId) {
          page.classList.add("active")
        } else {
          page.classList.remove("active")
        }
      })
    })
  })

  // Modal Functionality
  const addBookBtn = document.getElementById("add-book-btn")
  const addBookModal = document.getElementById("add-book-modal")
  const closeModalBtn = document.querySelector(".close-modal")
  const cancelBtn = document.querySelector(".cancel-btn")

  function openModal() {
    addBookModal.style.display = "block"
    document.body.style.overflow = "hidden"
  }

  function closeModal() {
    addBookModal.style.display = "none"
    document.body.style.overflow = "auto"
  }

  if (addBookBtn) {
    addBookBtn.addEventListener("click", openModal)
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal)
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeModal)
  }

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target === addBookModal) {
      closeModal()
    }
  })

  // File Input Handling
  const fileInputs = document.querySelectorAll(".file-input")

  fileInputs.forEach((input) => {
    input.addEventListener("change", function () {
      const fileName = this.files[0] ? this.files[0].name : "لم يتم اختيار ملف"
      const fileNameElement = this.parentElement.querySelector(".file-name")
      if (fileNameElement) {
        fileNameElement.textContent = fileName
      }
    })
  })

  // Select All Checkboxes
  const selectAllBooks = document.getElementById("select-all-books")
  const bookCheckboxes = document.querySelectorAll(".book-checkbox")

  if (selectAllBooks) {
    selectAllBooks.addEventListener("change", function () {
      bookCheckboxes.forEach((checkbox) => {
        checkbox.checked = this.checked
      })
    })
  }

  const selectAllUsers = document.getElementById("select-all-users")
  const userCheckboxes = document.querySelectorAll(".user-checkbox")

  if (selectAllUsers) {
    selectAllUsers.addEventListener("change", function () {
      userCheckboxes.forEach((checkbox) => {
        checkbox.checked = this.checked
      })
    })
  }

  const selectAllBorrowings = document.getElementById("select-all-borrowings")
  const borrowingCheckboxes = document.querySelectorAll(".borrowing-checkbox")

  if (selectAllBorrowings) {
    selectAllBorrowings.addEventListener("change", function () {
      borrowingCheckboxes.forEach((checkbox) => {
        checkbox.checked = this.checked
      })
    })
  }

  // Charts
  if (typeof Chart !== "undefined") {
    console.log("Chart.js is available");

    // Borrowing Chart
    const borrowingChartCanvas = document.getElementById("borrowingChart")

    if (borrowingChartCanvas) {
      console.log("Canvas element found");

      const borrowingChart = new Chart(borrowingChartCanvas, {
        type: "bar",
        data: {
          labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو"],
          datasets: [
            {
              label: "الإعارات",
              data: [65, 59, 80, 81, 56, 55],
              backgroundColor: "rgba(37, 99, 235, 0.7)",
              borderColor: "rgba(37, 99, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "الإرجاعات",
              data: [45, 49, 60, 71, 46, 45],
              backgroundColor: "rgba(16, 185, 129, 0.7)",
              borderColor: "rgba(16, 185, 129, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })

      console.log("Chart created successfully");
    } else {
      console.log("Canvas element not found");
    }
  } else {
    console.log("Chart.js is not available");
  }

  // Form Submissions
  const addBookForm = document.getElementById("add-book-form")
  if (addBookForm) {
    addBookForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to the server
      alert("تم إضافة الكتاب بنجاح!")
      closeModal()
    })
  }

  const librarySettingsForm = document.getElementById("library-settings-form")
  if (librarySettingsForm) {
    librarySettingsForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to the server
      alert("تم حفظ إعدادات المكتبة بنجاح!")
    })
  }

  const borrowingSettingsForm = document.getElementById("borrowing-settings-form")
  if (borrowingSettingsForm) {
    borrowingSettingsForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to the server
      alert("تم حفظ إعدادات الإعارة بنجاح!")
    })
  }

  const websiteSettingsForm = document.getElementById("website-settings-form")
  if (websiteSettingsForm) {
    websiteSettingsForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to the server
      alert("تم حفظ إعدادات الموقع بنجاح!")
    })
  }

  // Logout functionality
  const logoutBtn = document.getElementById("logout-btn")
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (confirm("هل أنت متأكد من تسجيل الخروج؟")) {
        // Here you would typically send a logout request to the server
        alert("تم تسجيل الخروج بنجاح!")
        // Redirect to login page
        // window.location.href = 'login.html';
      }
    })
  }
})

