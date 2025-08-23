<script lang="ts">
  // Simple test component without Tailwind
  interface Props {
    userName?: string;
    userRole?: string;
  }

  let {
    userName = 'John Doe',
    userRole = 'Staff Engineer',
  }: Props = $props();
</script>

<div style="background: blue; color: white; padding: 20px; margin: 20px;">
  <h2>Mobile Menu Component Test</h2>
  <p>User: {userName}</p>
  <p>Role: {userRole}</p>
  <button style="background: green; color: white; padding: 10px;">Test Button</button>
</div>