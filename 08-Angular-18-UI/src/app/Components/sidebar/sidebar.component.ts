import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="bg-white w-80 min-h-screen pt-8 shadow-sm">
      <ul class="space-y-2 font-medium">
        <!-- Dashboard -->
        <li
          class="flex items-center justify-between py-2 px-4 rounded bg-blue-100 text-blue-600 font-semibold"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path
                d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
              />
            </svg>
            <span>Dashboard</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="m280-400 200-200 200 200H280Z" />
          </svg>
        </li>

        <li
          class="text-gray-700 flex items-center px-6 py-2 hover:bg-gray-100 rounded"
        >
          Classic
        </li>
        <li
          class="text-gray-700 flex items-center px-6 py-2 hover:bg-gray-100 rounded"
        >
          Minimal
        </li>

        <!-- Pages -->
        <li
          class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded text-gray-700"
        >
          <div class="flex items-center gap-2 uppercase text-xs font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280v-160h160v-280H360Zm220 220Z"
              />
            </svg>
            <span>Pages</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </li>

        <!-- Applications -->
        <li
          class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded text-gray-700"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M240-500v-220h220v220H240Zm0 260v-220h220v220H240Zm260-260v-220h220v220H500Zm0 260v-220h220v220H500ZM320-580h60v-60h-60v60Zm260 0h60v-60h-60v60ZM320-320h60v-60h-60v60Zm260 0h60v-60h-60v60ZM380-580Zm200 0Zm0 200Zm-200 0ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"
              />
            </svg>
            <span>Applications</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </li>

        <!-- UI Component -->
        <li
          class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded text-gray-700"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Z"
              />
            </svg>
            <span>UI Component</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </li>

        <!-- Widgets -->
        <li
          class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded text-gray-700"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Z"
              />
            </svg>
            <span>Widgets</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </li>

        <!-- Forms -->
        <li
          class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded text-gray-700"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M680-320q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"
              />
            </svg>
            <span>Forms</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </li>

        <!-- Charts -->
        <li
          class="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded text-gray-700"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354Z"
              />
            </svg>
            <span>Charts</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#1f1f1f"
          >
            <path d="M480-360 280-560h400L480-360Z" />
          </svg>
        </li>
      </ul>
    </aside>
  `,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
