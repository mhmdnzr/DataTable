

function TableGenerator(data) {
    const table = document.getElementById('ordersTable');
    const orders = data.queryResult;

    // Clear existing table rows
    table.innerHTML = '';

    // Populate table rows with data
    orders.forEach(order => {

        const row = document.createElement('section');


        row.classList.add('w-full')
        row.classList.add('flex')
        row.classList.add('flex-wrap')
        // Populate row cells with order details
        row.innerHTML = `
                                   
                                    <div class="w-full border flex flex-wrap official-class rounded-[5px] bg-white transition ease-in-out">
                                    <div class="w-1/12 p-2 flex row gap-5">
                                        <input type="checkbox" id=${"checkbox1-" + order.id} class="accordion-checkbox hidden"
                                               onclick="rotateButton(this)">
                                        <label for=${"checkbox1-" + order.id} class="accordion btn btn-sm btn-ghost">
                                            <i class="fa-solid fa-chevron-down"></i>
                                        </label>
                                   
                                   
                                        <div class="dropdown dropdown-bottom">
                                            <div tabindex="0" role="button" class="btn btn-sm btn-ghost">
                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                            </div>
                                            <ul tabindex="0"
                                                class="dropdown-content z-[1111] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li>
                                                    <a href="#" class="text-right" dir="rtl">Item 1</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="text-right" dir="rtl">Item 2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="w-6/12 p-2 flex justify-end">
                                        <p class="text-right rtl">
                                            <span>نام شعبه:</span>
                                            <span>${order.saleBranchName}</span>
                                        </p>
                                    </div>
                                    <div class="w-3/12 p-2 flex justify-end">
                                        <p class="text-right rtl">
                                            <span>نام شرکت:</span>
                                            <span>${order.companyName}</span>
                                        </p>
                                    </div>
                                    <div class="w-1/12 p-2 flex justify-end px-3">
                                        <span>${order.id}</span>
                                    </div>
                                    <div class="w-1/12 p-2 flex justify-end">
                                        <input type="checkbox" checked="checked" class="checkbox checkbox-md checkbox-neutral"/>
                                    </div>
                                    <div class="panel z-10 hidden w-full flex justify-between bg-white">
                                        <div class="w-full border flex flex-wrap official-class rounded-[5px] bg-white transition ease-in-out">
                                            <div class="w-1/12 p-2 flex row gap-5">
                                                <input type="checkbox" id=${"checkbox2-" + order.id} class="accordion-checkbox hidden"
                                                       onclick="rotateButton(this)">
                                                <label for=${"checkbox2-" + order.id} class="accordion btn btn-sm btn-ghost">
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                </label>
                                   
                                   
                                                <div class="dropdown dropdown-bottom">
                                                    <div tabindex="0" role="button" class="btn btn-sm btn-ghost">
                                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                                    </div>
                                                    <ul tabindex="0"
                                                        class="dropdown-content z-[1111] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li>
                                                            <a href="#" class="text-right" dir="rtl">
                                                                جزئیات سفارش
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="text-right" dir="rtl">
                                                                تغییر وضعیت سفارش
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="w-6/12 p-2 flex justify-end">
                                                <p class="text-right rtl">
                                                    <span>:کد مشتری</span>
                                                    <br>
                                                    <span>${order.customerCode}</span>
                                                </p>
                                            </div>
                                            <div class="w-3/12 p-2 flex justify-end">
                                                <p class="text-right rtl">
                                                    <span>:نام مشتری</span>
                                                    <br>
                                                    <span>${order.customerName}</span>
                                                </p>
                                            </div>
                                   
                                            <div class="w-1/12 p-2 flex justify-end">${order.id}</div>
                                            <div class="w-1/12 p-2 flex justify-end">
                                                <input type="checkbox" checked="checked"
                                                       class="checkbox checkbox-md checkbox-neutral"/>
                                            </div>
                                   
                                            <div class="panel divide-y divide-solid hidden">
                                                <div class="z-10 w-full flex justify-between bg-white">
                                   
                                                    <div class="w-1/12 p-2 flex justify-end items-center">
                                   
                                   
                                                        <div class="dropdown dropdown-bottom">
                                                            <div tabindex="0" role="button" class="btn btn-sm btn-ghost">
                                                                <i class="fa-solid fa-ellipsis-vertical"></i>
                                                            </div>
                                                            <ul tabindex="0"
                                                                class="dropdown-content z-[1111] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                                <li>
                                                                    <a href="#" class="text-right" dir="rtl" >جزئیات سفارش</a>
                                                                </li>
                                                                                    <li>
                                                                                        <a href="#" class="text-right" dir="rtl">تغییر وضعیت سفارش</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="w-9/12 p-2 flex justify-end">
                                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>نوع وصول:</span>
                                                                    <br>
                                                                    <span>${order.collectionTypeString}</span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                   
                                                                <p class="text-right rtl">
                                                                    <span>وضعیت سفارش:</span>
                                                                    <br>
                                                                    <span>${order.orderStatusString}</span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>جمع کل:</span>
                                                                    <br>
                                                                    <span class="separator3">${order.sum}</span>ريال
                                                                </p>
                                                            </div>
                                   
                                                        </div>
                                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                                            <div class='w-full py-[2px]'>
                                   
                                                                <p class="text-right rtl">
                                                                    <span>درجه مشتری:</span>
                                                                    <br>
                                                                    <span>${order.customerDegree}</span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    &nbsp;
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>مبلغ تخفیف:</span>
                                                                    <br>
                                                                    <span class="separator3">${order.discount}</span>ريال
                                                                </p>
                                                            </div>
                                   
                                                        </div>
                                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>نام تابلو:</span>
                                                                    <br>
                                                                    <span>${order.shopName}</span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>شماره فاکتور:</span>
                                                                    <br>
                                                                    <span>
                                                                        ${(order.factorId != null ? order.factorId : order.orderId)}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>مبلغ ناخالص:</span>
                                                                    <br>
                                                                    <span class="separator3">${order.grossAmount}</span>ريال
                                                                </p>
                                                            </div>
                                   
                                                        </div>
                                                        <div dir="rtl" class="w-3/12 p-2 flex flex-wrap gap-[16px] p-[16px]">
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>صنف-فعالیت:</span>
                                                                    <br>
                                                                    <span>${order.activityName}</span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>تاریخ فاکتور:</span>
                                                                    <br>
                                                                    <span dir="ltr">
                                                                        ${(order.factorDate != null ? order.factorDate : order.orderDate)}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div class='w-full py-[2px]'>
                                                                <p class="text-right rtl">
                                                                    <span>مبلغ ارزش افزوده:</span>
                                                                    <br>
                                                                    <span class="separator3 font-bold">${order.totalAmount}</span>ريال
                                                                </p>
                                                            </div>
                                   
                                                        </div>
                                                    </div>
                                                    <div class="w-1/12 p-2 flex justify-end items-center">${order.id}</div>
                                                    <div class="w-1/12 p-2 flex justify-end items-center">
                                                        <input type="checkbox" checked="checked"
                                                               class="checkbox checkbox-md checkbox-neutral"/>
                                                    </div>
                                                </div>
                                   
                                   
                                            </div>
                                   
                                        </div>
                                    </div>
                                    </div>
                       
                                    `;
        table.appendChild(row);
    });

}



document.addEventListener('DOMContentLoaded', function () {


    const paginationContainer = document.getElementById('pagination');

    const apiUrl = 'http://localhost:58863/api/PurchaseOrder/GetOrders';

    const itemsPerPage = 4; // Adjust as needed
    let currentPage = 1;

    function fetchData(pageNumber) {
        const url = `${apiUrl}?NeedTotalCount=true&PageNumber=${pageNumber}&PageSize=${itemsPerPage}`;

        // Fetch data from the API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                TableGenerator(data)
                // Update pagination
                let acc = document.getElementsByClassName("accordion");

                let i;

                for (i = 0; i < acc.length; i++) {
                    acc[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        let panel = this.parentElement.parentElement.lastElementChild;
                        if (panel.classList.contains("hidden")) {
                            panel.classList.remove("hidden");
                        } else {
                            panel.classList.add("hidden");
                        }
                    });
                }
                updatePagination(pageNumber, Math.ceil(data.totalCount / itemsPerPage));
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function updatePagination(currentPage, totalPages) {
        paginationContainer.innerHTML = '';

        const showPages = 2; // Number of pages to show before and after current page
        const totalButtons = showPages * 2 + 1; // Total buttons to show (including current page)

        let startPage = Math.max(1, currentPage - showPages);
        let endPage = Math.min(totalPages, currentPage + showPages);

        // Add "First" button
        if (startPage > 1) {
            addPageButton(1);
            if (startPage > 2) {
                addEllipsis();
            }
        }

        // Add page buttons
        for (let i = startPage; i <= endPage; i++) {
            addPageButton(i);
        }

        // Add "Last" button
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                addEllipsis();
            }
            addPageButton(totalPages);
        }

        function addPageButton(page) {
            const btn = document.createElement('button');
            btn.classList.add('join-item', 'btn', 'btn-md');
            btn.innerText = page;
            btn.addEventListener('click', () => fetchData(page));
            if (page === currentPage) {
                btn.classList.add('btn-active');
            }
            paginationContainer.appendChild(btn);
        }

        function addEllipsis() {
            const ellipsis = document.createElement('button');
            ellipsis.classList.add('join-item');
            ellipsis.classList.add('btn');
            ellipsis.classList.add('btn-disabled');
            ellipsis.innerText = '...';
            paginationContainer.appendChild(ellipsis);
        }
    }


    // Initial data fetch
    fetchData(currentPage);
});





function rotateButton(checkbox) {
    let icon = checkbox.nextElementSibling.querySelector('.fa-solid.fa-chevron-down');

    // Toggle the 'rotate-180' class on the checkbox label
    checkbox.classList.toggle('rotate-0');

    // Toggle the 'rotate-180' class on the icon
    icon.classList.toggle('rotate-180');

    // Find the two-level parent using the official class
    let twoLevelParent = checkbox.closest('.official-class');

    if (twoLevelParent) {
        if (checkbox.checked) {
            twoLevelParent.classList.replace('bg-white', 'bg-neutral-100');
        } else {
            twoLevelParent.classList.replace('bg-neutral-100', 'bg-white');
        }
    }

    console.log(checkbox.checked ? checkbox.id + ' is checked' : checkbox.id + ' is unchecked');
}
